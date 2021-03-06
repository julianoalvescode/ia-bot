const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const Routes = require('./routes/Routes')

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server on %s', port)
})

mongoose.connect('',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(Routes)
