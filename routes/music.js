import express from 'express'
// eslint-disable-next-line import/no-named-as-default
import Music from '../plugins/music'

const router = express.Router()

router.get('/music', Music.getAllMusic)
router.post('/music', Music.addMusic)
router.delete('/music/:id', Music.deleteMusic)
router.put('/music/:id', Music.updateMusic)
router.get('/music/title', Music.searchTitle)

module.exports = router
