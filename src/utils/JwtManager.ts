import { IncomingHttpHeaders } from 'http'
import jwt from 'jsonwebtoken'

/**
 * Generates a JWT token using the enviroment secret
 * @param {object | string} payload item that will be inserted into the token payload
 * @returns {string} JWT token generated with the sent payload
 */
export const generateJwt = (payload:object|string): string => {
    return jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        { expiresIn: "2h" }
    )
}

export const validateJwt = (token:string):any  => {
    return jwt.verify(token, process.env.JWT_SECRET)
}