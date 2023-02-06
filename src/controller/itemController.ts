import { Request, Response } from "express";
import { dataSource } from "../datasource";
import { Item } from "../entity/Item";

const itemRep = dataSource.getRepository(Item)


class ItemController{
    public async create(req:Request, res:Response) {
        try {
            if(!req.body.list_id){
                throw 'List id is required'
            }
            if(!req.body.name){
                throw 'Item name is required'
            }
            if(!req.body.description){
                throw 'Item description is required'
            }

            res.json(await itemRep.save({
                list_id     : req.body.list_id,
                name        : req.body.name,
                description : req.body.description
            }))
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }
    
    public async update(req:Request, res:Response) {
        try {
            const saved = await itemRep.save(req.body)
            console.log(saved)
            res.json(saved)
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }
}

export const itemController = new ItemController()