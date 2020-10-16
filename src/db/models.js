const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize({
    database : 'socialmediadb',
    username : 'socialmediauser',
    password : 'chirag1234',
    dialect : 'mysql'
})

const ColIdDef = {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
}

const ColUsernameDef = {
    type : DataTypes.STRING(30),
    unique : true,
    allowNull : false
}

const Users = db.define('user', {
    id : ColIdDef,
    username : ColUsernameDef
})

const Posts = db.define('post', {
    id : ColIdDef,
    title : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    body : {
        type : DataTypes.TEXT,
        allowNull : false
    }
})

const Comments = db.define('comment', {
    id : ColIdDef,
    title : {
        type : DataTypes.STRING(100),
        allowNull : false
    }, 
    body : {
        type : DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Users.hasMany(Comments)

Posts.belongsTo(Users)
Posts.hasMany(Comments)

Comments.belongsTo(Users)
Comments.belongsTo(Posts)



module.exports = {
    db, Users, Posts, Comments
}