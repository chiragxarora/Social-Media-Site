const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

const createAnonUser = async () => {
    const user = await Users.create({
        username : genRandomUsername()
    })

    return user
}

module.exports = {
    createAnonUser
}