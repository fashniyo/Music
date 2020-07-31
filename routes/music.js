import express from 'express'
// eslint-disable-next-line import/no-named-as-default
import Music from '../plugins/music'

const router = express.Router()

router.get('/music', Music.getAllMusic)
router.post('/music', Music.addMusic)
router.delete('/music/:id', Music.deleteMusic)
router.put('/music/:id', Music.updateMusic)
router.get('/musics/title', Music.searchTitle)
router.get('/music/:id', Music.musicId)
router.get('/musics/genre', Music.searchGenre)
router.get('/musics/artist', Music.searchArtist)
router.get('/musics/album', Music.searchAlbum)
router.get('/musics/year', Music.musicYear)
router.get('/musics/likes', Music.musicLikes)
router.get('/musics/rating', Music.musicRating)

module.exports = router
