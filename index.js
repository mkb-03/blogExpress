const express = require('express')
const path = require('path')
const app = express()
const port = 3000


// serve a directory in express.js

app.use(express.static(path.join(__dirname, "static")))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})