const route = require('express').Router()
const { getUserById, getUserByUsername, getAllUsers, createAnonUser } = require('../../controllers/users')

route.get('/', async (req, res) => {
    let users = await getAllUsers()
    res.status(200).send(users)
})

route.get('/:id', async (req, res) => {
    let user;
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id)
    }else{
        user = await getUserById(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send({
            error : 'No such user id or username'
        })
    }
})

route.post('/', async(req, res) => {
    const user = await createAnonUser()
    res.status(201).send(user)
})

module.exports = {
    usersRoute : route
}