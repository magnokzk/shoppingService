import jwt from 'jsonwebtoken'

export const generateJwt = (payload:object): string => {
    return jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        { expiresIn: "2h" }
    )
}