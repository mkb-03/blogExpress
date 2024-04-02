const express = require('express')
const router = require(express.Router)

app.get('/', (req, res) => {
    res.sendFile("templates/index.html")
})
