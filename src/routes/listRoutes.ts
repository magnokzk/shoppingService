import { Router } from "express"
import { listController } from "../controller/listController"
import { authorization } from '../middleware/tokenMiddleware'

const listRouter:Router = Router()

listRouter.post("/list/create", authorization, listController.create)
listRouter.route("/list")
    .get(authorization, listController.getByUserId)
    .delete(authorization, listController.deleteList)

export { listRouter };