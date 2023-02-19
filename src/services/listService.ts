import { dataSource } from "../datasource";
import { Item } from "../entity/Item";
import { List } from "../entity/List";

import _ from 'underscore'
import { SharedRelation } from "../entity/SharedRelation";
import { ShareRequest } from "../entity/ShareRequest";

const listRep = dataSource.getRepository(List)
const sharedRelRep = dataSource.getRepository(SharedRelation)
const sharedReqRep = dataSource.getRepository(ShareRequest)
const itemRep = dataSource.getRepository(Item)

class ListService {
    public async deleteListById(list:List) {
        list = _.omit(list, 'user') as List
        if(list.items.length > 0) {
            await itemRep.remove(list.items)
            list = _.omit(list, 'items') as List
        }

        const sharedRequests = await sharedReqRep.find({where: {list_id: list.id}})
        if(!_.isEmpty(sharedRequests)){
            await sharedReqRep.remove(sharedRequests)
        }

        const sharedLists = await sharedRelRep.find({where: {list_id: list.id}})
        if(!_.isEmpty(sharedLists)) {
            await sharedRelRep.remove(sharedLists)
        }
        
        await listRep.remove(list)
    }
}

export const listService = new ListService()