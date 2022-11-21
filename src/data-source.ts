import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User, Account, Transaction } from './entity'

export const AppDataSource = new DataSource({
  type: 'mongodb',
  host: 'db',
  port: 27017,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  database: 'basic-crud',
  synchronize: false,
  logging: false,
  entities: [User, Account, Transaction],
  migrations: [],
  subscribers: [],
})
