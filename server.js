const express = require('express')
const app = express()
const PORT = 3000

const db = require('./config/database')

const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/user/', userRoute)
app.use('/post/', postRoute)


db.authenticate()
    .then(() => console.log('DB authenticate'.toUpperCase()))
    .catch(e => console.log(e))

app.listen(PORT, () => {
    console.log('server is running on port '.toUpperCase() + PORT);
})
