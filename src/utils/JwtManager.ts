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


/**
 * Validates a JWT token using the enviroment secret
 * @param {string} token token that will be validated
 * @returns {JwtData} Data that will be returned from token
 */
export const validateJwt = (token:string):JwtData  => {
    return jwt.verify(token, process.env.JWT_SECRET) as JwtData
}