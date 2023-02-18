import { Request, Response, NextFunction } from "express";
import { validateJwt } from '../utils/JwtManager'

export const authorization = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization
        try {
            if(!token) {
                res.status(401).end()
                return
            }
            res.locals.userTokenInfo = validateJwt(token)
    
            next()
        } catch (err) {
            console.log(err)
            res.status(401).end()
        }
}