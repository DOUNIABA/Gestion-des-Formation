
const express=require('express')
const app=express()
const db=require('./config/db')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(8080)

module.exports= app