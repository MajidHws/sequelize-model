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
                attributes: ['id', 'title'],
                //limit: 2,
                //offset: 3,
                count: true
            }
        ],
        attributes: ['id', 'name'],
        //limit: 3,
        //offset: 3
    })

    res.send(users)
})


module.exports = router