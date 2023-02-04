import { Router } from "express";
import { userRouter } from "./routes/userRoutes";

const router: Router = Router()

//Routes
router.use(
    userRouter
)


export { router };