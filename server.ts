import dotenv from 'dotenv';
dotenv.config()
//Configs
const port: number = 8080;

//Packages
import express from 'express'
const app = express()

//Modules
import router from './src/Router';

//Use
app.use(express.json())
app.use(router)

//Listen
app.listen(port, () => console.log(`Connected on port ${port}`))