import { Request, Response } from "express";
import { dataSource } from "../datasource";
import { List } from "../entity/List";
import { SharedRelation } from "../entity/SharedRelation";
import { listService } from "../services/listService";
import { validateJwt } from "../utils/JwtManager";

const listRep = dataSource.getRepository(List)

class ListController{

    public async create(req:Request, res:Response) {
        try {
            if(!req.body.title){
                throw 'List title is required'
            }
            if(!req.body.description){
                throw 'List description is required'
            }
            if(typeof req.headers.authorization != 'string'){
                throw 'Authorization invalido'
            }

            const userInfo = validateJwt(req.headers.authorization)
            
            res.json(await listRep.save({
                creator_id  : userInfo.id,
                title       : req.body.title,
                description : req.body.description
            }))
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }

    public async deleteList(req:Request, res:Response) {
        try {
            await listService.deleteListById(req.body)
            res.status(200).end()
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }

    public async getByUserId(req:Request, res:Response) {
        try {
            if(typeof req.headers.authorization != 'string'){
                throw 'Authorization invalido'
            }

            const userInfo = validateJwt(req.headers.authorization)

            const list = await listRep.find({
                relations: {
                    items: true,
                    user: true
                },
                where: {
                    creator_id: userInfo.id
                }
            })
            res.json(list)
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }

    public async getSharedListByUserId(req:Request, res:Response) {
        try {
            if(typeof req.headers.authorization != 'string'){
                throw 'Authorization invalido'
            }

            const userInfo = validateJwt(req.headers.authorization)

            const list = await listRep.find({
                relations: {
                    items: true,
                    user: true
                },
                where: {
                    shared_relation: {
                        user_id: userInfo.id
                    }
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
