import { Router } from "express"
import { shareController } from "../controller/shareController";
import { authorization } from '../middleware/tokenMiddleware'

const shareRouter:Router = Router()

shareRouter.post("/share/create", authorization, shareController.create)
shareRouter.post("/share/accept", authorization, shareController.acceptedShare)

export { shareRouter };