import { Request } from "express";
import { dataSource } from '../datasource'
import { User } from "../entity/User";

import bcrypt from 'bcrypt'

const userRep = dataSource.getRepository(User)

class UserService{

    public async login(req:Request) {
        return await userRep
            .findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            .then((res) => {
                if(!res) {
                    throw 'Unauthorized'
                }

                return res
            })
    }

    public async makeRegister(req:Request) {
        const user = new User()
        user.firstName  = req.body.firstName
        user.lastName   = req.body.lastName
        user.email      = req.body.email
        user.password   = req.body.password

        await userRep.findOne({
            where: {
                email: req.body.email
            }
        }).then((res) => {
            if(res) {
                throw 'User email already registered!'
            }
        })
    
        return await userRep.save(user)
    }
}

export const userService = new UserService();
