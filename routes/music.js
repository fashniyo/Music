import express from 'express'
import Music from '../plugins/music'

const router = express.Router()

router.get('/music', Music.getAllMusic)

module.exports = router
