import { dataSource } from '../datasource'
import { User } from "../entity/User"

import { encrypt } from "../utils/CryptoManager"
import { generateJwt } from "../utils/JwtManager"

const userRep = dataSource.getRepository(User)

class UserService{

    public async login(userInfo:User) {
        return await userRep
            .findOne({
                where: {
                    email   : userInfo.email,
                    password: encrypt(userInfo.password)
                }
            })
            .then((res) => {
                if(!res) {
                    throw 'Unauthorized'
                }

                return {
                    token: generateJwt({
                            id      : res.id,
                            email   : res.email
                        })
                }
            })
    }

    public async makeRegister(userInfo:User) {
        const user = new User()
        user.firstName  = userInfo.firstName
        user.lastName   = userInfo.lastName
        user.email      = userInfo.email
        user.password   = encrypt(userInfo.password)

        await userRep.findOne({
            where: {
                email: userInfo.email
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
