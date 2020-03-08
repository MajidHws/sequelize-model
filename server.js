const express = require('express')
const db = require('./config/database')

const app = express()

const PORT = 3000

const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const nationalityRoute = require('./routes/nationality')
const userNationalityRoute = require('./routes/userNationality')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/user/', userRoute)
app.use('/post/', postRoute)
app.use('/nationality/', nationalityRoute)
app.use('/user-nationality/', userNationalityRoute)


db.authenticate()
    .then(() => console.log('DB authenticate'.toUpperCase()))
    .catch(e => console.log(e))

app.listen(PORT, () => {
    console.log('server is running on port '.toUpperCase() + PORT);
})
