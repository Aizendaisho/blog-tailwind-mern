const express = require("express")
const dotenv = require("dotenv")
const app = express()
const mongoose = require("mongoose")
dotenv.config()
const port = 8000

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Se conecto a la base de datos!'));




app.listen(port,()=>{

    console.log(`se conecto en el puerto ${port}`)
})