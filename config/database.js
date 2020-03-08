const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('./config')[env]

const host = 'ec2-54-246-90-10.eu-west-1.compute.amazonaws.com'
const user = 'mdickhrzkaphgk'
const password = '6524b8fb5eba80d7b4fc8d64f3ac2b415fed0c212a969f1f08be7ea711011151'
const dbName = 'dcqeevm4ai3qqu'
const port = 5432
const link = 'postgres://mdickhrzkaphgk:6524b8fb5eba80d7b4fc8d64f3ac2b415fed0c212a969f1f08be7ea711011151@ec2-54-246-90-10.eu-west-1.compute.amazonaws.com:5432/dcqeevm4ai3qqu'

const pg = new Sequelize(dbName, user, password, {
    host: host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

const mySql = new Sequelize(config.database, config.username, config.password, config)

module.exports = pg
