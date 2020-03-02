module.exports = (db, Sequelize) => {
    return db.define('users', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.INTEGER
        }
    })
}