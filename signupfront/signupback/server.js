const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const routeUrls = require('./routes/routes')

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

//db
const uri = process.env.DATABASE_ACCESS
mongoose.connect(uri, {useNewUrlParser :true,useCreateIndex :true});

const connected = mongoose.connection
connected.once('open',()=> {
     console.log('mongoDB connection established successfully.')
})
app.use('/api', routeUrls)

// const port = process.env.PORT || 4000;
app.listen(1245, ()=> {console.log(`Server is up and running`) } )