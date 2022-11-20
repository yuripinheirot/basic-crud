import { AppDataSource } from "./data-source"
import app from './app'

AppDataSource.initialize().then(async () => {
    console.log('Database connected successfully!')

    app.listen(process.env.APP_PORT, () => {
        console.info(`Server listening on ${process.env.APP_PORT}`)
      })
}).catch(error => console.log(error))