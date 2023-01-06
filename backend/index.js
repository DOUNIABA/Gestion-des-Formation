
const express=require('express')
const app=express()
const db=require('./config/db')
const cors=require('cors')
const employe=require('./router/routes/EmployeRoutes')
const formation=require('./router/routes/FormationRoutes')
const organisme=require('./router/routes/OrganismRoutes')
const role=require('./router/routes/RoleRoute')
const auth=require('./router/routes/AuthRoute')
const session=require('./router/routes/')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/employe',employe)
app.use('/formation',formation)
app.use('/organisme',organisme)
app.use('/role',role)
app.use('/auth',auth)

app.listen(8080)

module.exports= app
