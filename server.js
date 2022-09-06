const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const server = express()
const path = require('path')

const minifigRouter = require('./routes/minifig')

// Middlewares to parse request body and incoming URL as well as allow
// Cross Origin Resource Sharing
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors());
server.use(morgan('combined'))

server.use(express.static(path.join(__dirname)));

server.use('/api', minifigRouter)

// Test route
server.get("/",(req,res)=>{
    res.send("Its working")
})
// Error Handler middleware for uncaught errors
server.use((err, req, res, next) => {
    (err) ? 
    res.send(`err:${err}`) : 
    res.send("something unexpected Happened :(")
})

// Making server listen
server.listen(4000, () => {
    console.log('Listening on port 4000 . . . ')
})

