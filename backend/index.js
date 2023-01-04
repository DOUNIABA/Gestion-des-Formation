
const express=require('express')
const app=express()
const db=require('./config/db')
const cors=require('cors')
const user=require('./router/routes/UserRoutes')
const formation=require('./router/routes/FormationRoutes')
const organisme=require('./router/routes/OrganismRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',user)
app.use('/formation',formation)
app.use('/organisme',organisme)

app.listen(8080)

module.exports= app
