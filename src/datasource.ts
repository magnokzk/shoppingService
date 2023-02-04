import { DataSource } from "typeorm"
import { User } from './entity/User'
import "dotenv/config"

const AppDataSource = new DataSource({
    type    : "mysql",
    host    : process.env.HOST,
    port    : process.env.PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        User
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export const dataSource = AppDataSource