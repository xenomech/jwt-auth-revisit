import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv
dotenv.config()
const PORT = process.env.PORT || 5000;

//start server
const app = express()
app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('hit'))

//middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`started at ${PORT}`))