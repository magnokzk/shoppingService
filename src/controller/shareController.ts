import { Request, Response } from "express"
import { dataSource } from "../datasource"
import { SharedRelation } from "../entity/SharedRelation"
import { ShareRequest } from "../entity/ShareRequest"
import { shareService } from "../services/shareService"
import { validateJwt } from "../utils/JwtManager"

const shareReqRep = dataSource.getRepository(ShareRequest)
const shareRelRep = dataSource.getRepository(SharedRelation)


class ShareController{
    public async create(req:Request, res:Response) {
        try {
            if(!req.body.list_id){
                throw 'List id is required'
            }

            res.json(await shareService.createRequest({
                creator_id: res.locals.userTokenInfo.id,
                list_id: req.body.list_id
            } as ShareRequest))
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }

    public async acceptedShare(req:Request, res:Response) {
        try {
            if(!req.body.token){
                throw 'Token is required'
            }

            res.json(await shareService.acceptRequest(req.body.token, res.locals.userTokenInfo))
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }
    
    // public async update(req:Request, res:Response) {
    //     try {
    //         const saved = await itemRep.save(req.body)
    //         console.log(saved)
    //         res.json(saved)
    //     } catch (err) {
    //         console.log(err)
    //         res.status(500).end()
    //     }
    // }
}

export const shareController = new ShareController()