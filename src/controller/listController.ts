import { Request, Response } from "express";
import { dataSource } from "../datasource";
import { List } from "../entity/List";

const listRep = dataSource.getRepository(List)

class ListController{

    public async create(req:Request, res:Response) {
        try {
            if(!req.body.creator_id){
                throw 'Creator id is required'
            }
            if(!req.body.title){
                throw 'List title is required'
            }
            if(!req.body.description){
                throw 'List description is required'
            }

            res.json(await listRep.save({
                creator_id  : req.body.creator_id,
                title       : req.body.title,
                description : req.body.description
            }))
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }

    public async getAll(req:Request, res:Response) {
        try {
            const list = await listRep.find({
                relations: {
                    items: true,
                    user: true
                }
            })
            res.json(list)
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }
}

export const listController = new ListController();
