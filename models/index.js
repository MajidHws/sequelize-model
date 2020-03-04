const Sequelize = require('sequelize')
const db = require('../config/database')

const NationalitySchema = require('./Nationality')
const UserSchema = require('./User')
const PostSchema = require('./Post')

const Nationality = NationalitySchema(db, Sequelize)
const User = UserSchema(db, Sequelize)
const Post = PostSchema(db, Sequelize)
const UserNationality = db.define('user_nationality')

User.hasMany(Post)
Post.belongsTo(User)

Nationality.belongsToMany(User, { through: UserNationality })
User.belongsToMany(Nationality, { through: UserNationality })


db.sync({ force: false })
    .then(() => console.log('DB synced'.toUpperCase()))
    .catch(e => console.log(e))

module.exports = {
    User,
    Post,
    Nationality,
    UserNationality
}