module.exports = (db, Sequelize) => {
    return db.define('nationalities', {
        name: {
            type: Sequelize.STRING
        }
    })
}