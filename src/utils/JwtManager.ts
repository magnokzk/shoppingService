import { IncomingHttpHeaders } from 'http'
import jwt from 'jsonwebtoken'
import { JwtData } from '../types/interfaces/jwt'

/**
 * Generates a JWT token using the enviroment secret
 * @param {JwtData} payload item that will be inserted into the token payload
 * @returns {string} JWT token generated with the sent payload
 */
export const generateJwt = (payload:JwtData): string => {
    return jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        { expiresIn: "2h" }
    )
}

export const validateJwt = (token:string):JwtData  => {
    return jwt.verify(token, process.env.JWT_SECRET)
}