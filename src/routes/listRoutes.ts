import { Router } from "express"
import { listController } from "../controller/listController"

const listRouter:Router = Router()

listRouter.post("/list/create", listController.create)
listRouter.route("/list")
    .get(listController.getByUserId)
    .delete(listController.deleteList)

export { listRouter };