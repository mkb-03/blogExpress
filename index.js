const express = require('express')
var exphbs = require('express-handlebars');
const path = require('path')
const app = express()
const port = 3000


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// serve a directory in express.js

app.use(express.static(path.join(__dirname, "static")))

app.use('/', require(path.join(__dirname, 'routes/blogs.js')))



app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})