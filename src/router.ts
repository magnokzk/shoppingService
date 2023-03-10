import { Router } from "express";
import { userRouter } from "./routes/userRoutes";
import cors from 'cors'
import { listRouter } from "./routes/listRoutes";
import { itemRouter } from "./routes/itemRoutes";
import { shareRouter } from "./routes/shareRoutes";

// cors configuration
const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
      'Authorization'
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    origin: [
      'http://localhost:3000',
      'http://localhost:5173'
    ]
  }

const router: Router = Router()

//Routes
router.use(
    // setting cors options
    cors(options),
    userRouter,
    listRouter,
    itemRouter,
    shareRouter
)

export { router };