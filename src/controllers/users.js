const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

const createAnonUser = async () => {
    let name = genRandomUsername()
    let check = Users.findAll({
        where: {
            username : name
        }
    })
    while(check != 0){
        name = name + '-' + Math.random() * 10001
    }
    const user = await Users.create({
        username : name
    })

    return user
}

module.exports = {
    createAnonUser
}