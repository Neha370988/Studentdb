const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})


app.use(express.json())

const studentRouter=require('./routes/students')

app.use('/students',studentRouter)

app.listen(8084, () => {
    console.log('Server started')
})