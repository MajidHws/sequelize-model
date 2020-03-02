const Sequelize = require('sequelize')
const db = require('../config/database')

const UserSchema = require('./User')
const PostSchema = require('./Post')

const User = UserSchema(db, Sequelize)
const Post = PostSchema(db, Sequelize)

   
db.sync({force: false})
    .then(() => console.log('DB synced'.toUpperCase()))
    .catch(e => console.log(e))


module.exports = {
    User,
    Post
}