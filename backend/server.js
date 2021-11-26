import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cors from "cors"
import productRout from './router/productRout.js'
dotenv.config()

const app = express()
connectDb()
app.use(cors())

const PORT = process.env.PORT ||5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`))

app.use('/api/user',productRout)



    