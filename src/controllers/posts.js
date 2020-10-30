const { Posts, Users } = require('../db/models')
const { Op } = require('sequelize')

const createNewPost = async (userId, title, body) => {
    const post = await Posts.create({
        userId : userId,
        title : title,
        body : body
    })
    return post
}

/**
 * showAllPosts({username: '---'})
 * or
 * showAllPosts({title: '---'})
 * => we will receive a query object and filter the results based on that
 *    if received object is empty, then we will show all the posts
 */

const showAllPosts = async () => {
    const posts = Posts.findAll({
        include : [Users]
    })
    return posts
}

const searchByText = async (pieceOfText) => {
    return Posts.findAll({
        where : {
            [Op.or] : [
                {
                    title : {
                        [Op.substring] : pieceOfText,
                    }
                },
                {
                    body : {
                        [Op.substring] : pieceOfText,
                    }
                }
            ]
        
        }
    })
}

const searchByUser = async (userId) => {
    return Posts.findAll({
        include : [Users],
        where : {
            userId : userId
        }
    })
}

/* Test code */
// const task = async () => {
    // let post1 = await createNewPost('1', 'Sample Post', 'Some body of sample post');
    // console.log(post1);
    // let post2 = await createNewPost('2', 'Another Sample Post', 'Some body of another sample post');
    // console.log(post2);
    // const posts = await showAllPosts()
    // for(let p of posts){
    //     console.log(`${p.title}\n ${p.user.username} \n ${p.body} \n ----------------------- \n`)
    // }
//}

// task()

module.exports = {
    createNewPost, showAllPosts, searchByText, searchByUser
}