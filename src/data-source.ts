import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "basic-crud",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
