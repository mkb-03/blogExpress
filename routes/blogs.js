const express = require('express')
const path = require('path')
const router = express.Router()

app.get('/', (req, res) => {
    res.sendFile("templates/index.html")
})


module.exports = router