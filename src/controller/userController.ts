import { Request, Response } from "express";
import { userService } from "../services/userService";

class UserController{

    public async login(req:Request, res:Response) {
        try {
            if(!req.body.email) {
                throw 'Email is required'
            }
            if(!req.body.password) {
                throw 'Password is required'
            }

            await userService
                .login(req)
                .then((serviceRes) => {
                    res.json(serviceRes)
                })
        } catch (err) {
            console.log(err)
            res.status(500).end()
        }
    }

    public async register(req:Request, res:Response) {
        try {
            if(!req.body.firstName) {
                throw 'First name is required'
            }
            if(!req.body.lastName) {
                throw 'Last name is required'
            }
            if(!req.body.email) {
                throw 'Email is required'
            }
            if(!req.body.password) {
                throw 'Password is required'
            }
    
            await userService
                .makeRegister(req)
                .then((serviceRes) => {
                    res.json(serviceRes)
                })
        } catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }
}

export const userController = new UserController();
