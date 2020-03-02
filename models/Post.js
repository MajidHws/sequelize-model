module.exports = (db, Sequelize) => {
    return db.define('posts', {
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.TEXT
        }
    })
}