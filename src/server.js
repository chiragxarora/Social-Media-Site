const express = require('express')
const app = express()
const { db } = require('./db/models')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync()
    .then(() => {
        app.listen(7777, () => {
            console.log('Server started at http://localhost:7777')
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
    })