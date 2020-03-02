const express = require('express')
const router = express.Router()

const {User} = require('../models')

router.post('/', async (req, res) => {
res.send('done')
})


module.exports = router