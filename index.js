require('dotenv').config()

console.log(process.env.USER)

const express = require('express');

const server = express()
server.use(express.json())

server.get('/hello', (req, res) => {
    res.send('<p>Hello</p>')
})

const port = process.env.PORT || 3000

server.listen(port, () =>{
    console.log(`listening to ${port}`)
}) 
