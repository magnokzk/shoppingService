import { DataSource } from "typeorm"
import { User } from './entity/User'
import "dotenv/config"
import { List } from "./entity/List"
import { Item } from "./entity/Item"
import { SharedRelation } from "./entity/SharedRelation"
import { ShareRequest } from "./entity/ShareRequest"

const AppDataSource = new DataSource({
    type    : "mysql",
    host    : process.env.HOST,
    port    : process.env.PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        User,
        List,
        Item,
        SharedRelation,
        ShareRequest
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