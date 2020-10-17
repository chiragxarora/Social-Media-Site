const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

const createAnonUser = async () => {
    let name = genRandomUsername()
    let check = await Users.findAll({
        where: {
            username : name
        }
    })
    while(true){
        if(check == 0){
            break;
        }
        name = name + '-' + Math.floor(Math.random() * 1001)
        check = await Users.findAll({
            where: {
                username : name
            }
        })
    }
    const user = await Users.create({
        username : name
    })

    return user
}

/* Test Code */

// const task = async () => {
//     console.log(await createAnonUser())
//     console.log(await createAnonUser())
//     console.log(await createAnonUser())
// }

// task()

module.exports = {
    createAnonUser
}