import { Router } from "express";
import { userController } from "./controller/userController"
import { firstMiddleware } from "./middleware/firstMiddleware"

const router: Router = Router()

//Routes
router.post("/login", userController.login);
router.post("/register", userController.register);

export { router };