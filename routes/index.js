import express from 'express'
// eslint-disable-next-line import/extensions
import Music from '../plugins/music.js'

const router = express.Router()

/* GET home page. */
router.get('/', Music.welcome)

module.exports = router
