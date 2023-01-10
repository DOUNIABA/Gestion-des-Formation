const express = require('express')
const app = express()
const db = require('./config/db')
const cors = require('cors')
const employe=require('./router/routes/EmployeRoutes')
const formation=require('./router/routes/FormationRoutes')
const organisme=require('./router/routes/OrganismRoutes')
const auth=require('./router/routes/AuthRoute')
const session=require('./router/routes/SessionRoutes')

app.use(cors()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/employe',employe)
app.use('/api/formation',formation)
app.use('/api/organisme',organisme)
app.use('/api/auth',auth)
app.use('/api/session',session)

app.listen(8080)

module.exports= app
