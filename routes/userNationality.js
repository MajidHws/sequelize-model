const express = require('express')
const router = express.Router()

const { UserNationality } = require('../models')

router.post('/', async (req, res) => {

    const userNationality = new UserNationality(req.body)
    await userNationality.save()
    res.send(userNationality)
    
})

router.get('/', async (req, res) => {
    const usersNationalities = await UserNationality.findAndCountAll()
    res.send(usersNationalities)
})

module.exports = router