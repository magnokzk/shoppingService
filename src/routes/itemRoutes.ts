import { Router } from "express"
import { itemController } from "../controller/itemController"

const itemRouter:Router = Router()

itemRouter.post('/item/create', itemController.create)
itemRouter.put('/item/status', itemController.updateStatus)

export { itemRouter }