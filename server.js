const express = require('express')
const app = express()
const PORT = 3000

const userRoute = require('./routes/user')
const db = require('./config/database')

app.use('/user/', userRoute)


db.authenticate()
    .then(() => console.log('DB authenticate'.toUpperCase()))
    .catch(e => console.log(e))
    
app.listen(PORT, () => {
    console.log('server is running on port '.toUpperCase() + PORT);
})
