const express = require('express')
const router = express.Router()

const {Post, User} = require('../models')

router.post('/', async (req, res) => {

    const post = new Post(req.body)
    await post.save()
    res.send(post)
})

router.get('/', async (req, res) => {

    const posts = await Post.findAndCountAll({
        attributes: ['id', 'title'],
        include: [
            {
                model: User,
                attributes: ['id', 'name']
            }
        ]
    })
    res.send(posts)
})


module.exports = router