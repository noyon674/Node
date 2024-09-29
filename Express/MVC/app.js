const express = require('express')
const usersRouter = require('./routes/users.routes')

const app = express()

//use router
app.use(usersRouter)

//another route handle
app.use((req, res, next)=>{
    res.status(404).send({
        "message": "Page not found!"
    })
})
module.exports = app