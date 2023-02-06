import { Router } from "express";
import { listController } from "../controller/listController";

const listRouter:Router = Router()

listRouter.post("/list/create", listController.create);
listRouter.get("/list", listController.getAll)

export { listRouter };