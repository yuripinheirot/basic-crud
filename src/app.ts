import express from 'express'
import dotenv from 'dotenv'
import cors from "cors";

dotenv.config()

const app = express()
const port = process.env.PORT || 3003

app.use(express.json())
app.use(cors())

const server = app.listen(port, () => {
  console.info(`Server listening on ${port}`)
})

export default app