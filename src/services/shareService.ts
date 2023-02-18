import { dataSource } from "../datasource";

import _ from 'underscore'
import { ShareRequest } from "../entity/ShareRequest";
import { generateRandomToken } from "../utils/GeneratorManager";
import { JwtData } from "../types/interfaces/jwt";
import { SharedRelation } from "../entity/SharedRelation";

const shareReqRep = dataSource.getRepository(ShareRequest)
const shareRelRep = dataSource.getRepository(SharedRelation)

class ShareService {
    public async createRequest(shareRequest:ShareRequest) {
        const existingRequest = await shareReqRep.findOneBy({
            creator_id: shareRequest.creator_id, 
            list_id: shareRequest.list_id, 
            is_valid: true
        })
        if(existingRequest){
            return existingRequest
        }

        return await shareReqRep.save({
            list_id     : shareRequest.list_id,
            creator_id  : shareRequest.creator_id,
            token       : generateRandomToken(),
            is_valid    : true
        })
    }

    public async acceptRequest(token: string, jwtInfo: JwtData) {
        const existingRequest = await shareReqRep.findOneBy({
            token: token,
            is_valid: true
        })
        if(!existingRequest) {
            throw 'Request does not exist or is invalid'
        }
        if(existingRequest?.creator_id === jwtInfo.id) {
            throw 'Request generated by own user'
        }

        const hasPermition = await shareRelRep.findOneBy({
            list_id: existingRequest.list_id,
            user_id: jwtInfo.id
        })
        if(hasPermition) {
            throw 'User already has permition for this list'
        }

        await shareReqRep.save({...existingRequest, is_valid: false})
        return await shareRelRep.save({
            user_id: jwtInfo.id,
            list_id: existingRequest.list_id
        })
    }
}

export const shareService = new ShareService()