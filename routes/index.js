import express from 'express'
import Music from '../plugins/music'

const router = express.Router()

/* GET home page. */
router.get('/', Music.welcome)

module.exports = router
