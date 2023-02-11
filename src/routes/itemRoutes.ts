import { Router } from "express"
import { itemController } from "../controller/itemController"
import { authorization } from '../middleware/tokenMiddleware'

const itemRouter:Router = Router()

itemRouter.post('/item/create', authorization, itemController.create)
itemRouter.put('/item/update', authorization,itemController.update)

export { itemRouter }