import { Request, Response, NextFunction } from "express";
import { validateJwt } from '../utils/JwtManager'

export const authorization = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization
        if(!token) {
            res.status(401).end()
            return
        }
        if(!validateJwt(token)){
            res.status(401).end()
            return
        }

        next()
}