import { dataSource } from "../datasource";
import { Item } from "../entity/Item";
import { List } from "../entity/List";

import _ from 'underscore'

const listRep = dataSource.getRepository(List)
const itemRep = dataSource.getRepository(Item)

class ListService {
    public async deleteListById(list:List) {
        list = _.omit(list, 'user') as List
        if(list.items.length > 0) {
            await itemRep.remove(list.items)
            list = _.omit(list, 'items') as List
        }

        await listRep.remove(list)
    }
}

export const listService = new ListService()