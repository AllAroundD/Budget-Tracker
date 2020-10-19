require('dotenv').config() // loads confirmation information from the .env file
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const compression = require('compression')

const PORT = process.env.PORT || 3000

const app = express()

app.use(logger('dev'))

app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

mongoose.connect(process.env.DB_URI || process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
    if (err) {
      throw err
    }
    console.log('DB Connected Successfully')
  })

// routes
app.use(require('./routes/api.js'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})