const express = require('express')
const app = express()
const PORT = 3000

const db = require('./config/database')

db.authenticate()
    .then(() => console.log('ok'))
    .catch(e => console.log(e))
    
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
})
