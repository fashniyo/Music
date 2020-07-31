import express from 'express'
// eslint-disable-next-line import/no-named-as-default
import Music from '../plugins/music'

const router = express.Router()

router.get('/music', Music.getAllMusic)
router.post('/music', Music.addMusic)
router.delete('/music/:id', Music.deleteMusic)
router.put('/music/:id', Music.updateMusic)
router.get('/music/title', Music.searchTitle)
// router.get('/music/:id', Music.musicId)
router.get('/music/genre', Music.searchGenre)
router.get('/music/artist', Music.searchArtist)
router.get('/music/album', Music.searchAlbum)
router.get('/music/year', Music.musicYear)

module.exports = router
