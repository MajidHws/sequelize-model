const express = require('express')
const router = express.Router()

const {Post, User, Nationality} = require('../models')

router.post('/', async (req, res) => {

    const nationality = new Nationality(req.body)
    await nationality.save()
    res.send(nationality)
})

router.get('/', async (req, res) => {
    const nationalities = await Nationality.findAndCountAll({
        include: [User]
    })
    res.send(nationalities)
})

module.exports = router