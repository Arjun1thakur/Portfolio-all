const express=require('express')            //[x] express ins.
require('dotenv').config()    //[x] dotenv
const path=require('path')              
const app= express()    
const connection = require('./database/database')       //[x]  DB Connection
const PORT = process.env.PORT  || 8080         //[x] Port
const HomeRoute=require('./routes/DisplayRoute')   //[x] Home-Route
const cors=require('cors')  //[x] cors
const messageRoute=require('./routes/MesssageRoute')        // [x] message

app.use(express.json())
app.use(cors({origin:'*'}))
app.use('/',HomeRoute)
app.use('/',messageRoute)

app.use(express.static(path.resolve("../frontend/build")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve("../frontend/build/index.html"))
})

app.listen(PORT,()=>{
    connection();
    console.log(`http://localhost:${PORT}/`)
})