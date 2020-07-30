import express from 'express'
// eslint-disable-next-line import/no-named-as-default
import Music from '../plugins/music'

const router = express.Router()

router.get('/music', Music.getAllMusic)
router.post('/music', Music.addMusic)

module.exports = router
