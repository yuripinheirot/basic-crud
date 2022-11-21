import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'db',
  port: 27017,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  database: 'basic-crud',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
})
