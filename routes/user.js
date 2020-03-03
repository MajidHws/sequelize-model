const express = require('express')
const router = express.Router()

const { User, Post } = require('../models')

router.post('/', async (req, res) => {
    const user = new User(req.body)
    await user.save()

    res.send(user)
})

router.get('/', async (req, res) => {
    const users = await User.findAndCountAll({
        include: [
            {
                model: Post, 
                attributes: ['id', 'title']
            }
        ],
        attributes: ['id', 'name']
    })

    res.send(users)
})


module.exports = router