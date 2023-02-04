import { Request, Response, NextFunction } from "express";

class FirstMiddleware{
    public middleware(req:Request, res:Response, next:NextFunction) {
        req.body = {
            firstMiddleware: 'Returning from here'
        }
        next()
    }
}

export const firstMiddleware = new FirstMiddleware()