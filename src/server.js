const express = require('express')
const app = express()
const { db } = require('./db/models')

db.sync({force : true})
    .then(() => {
        app.listen(7777, () => {
            console.log('Server started at http://localost:7777')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
    })