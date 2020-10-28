const route = require('express').Router()
const { showAllPosts, createNewPost, searchByText } = require('../../controllers/posts')

route.get('/', async (req, res) => {
    let posts = await showAllPosts()
    res.status(200).send(posts)
})

route.get('/:pieceOfText', async (req, res) => {
    let posts = await searchByText(req.params.pieceOfText)
    res.status(200).send(posts)
})

route.post('/', async (req, res) => {
    let { userId ,title, body } = req.body
    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error : 'Need userId, title and post to create a post'
        })
    }
    let post = await createNewPost(userId, title, body)
    res.status(201).send(post)
})

module.exports = {
    postsRoute : route
}