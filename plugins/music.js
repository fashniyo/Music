/* eslint-disable radix */
import models from '../models/index'

const MusicModel = models.Music

class Music {
  static welcome(req, res) {
    res.send({ message: 'Welcome to Music House Api' })
  }

  static getAllMusic(req, res) {
    MusicModel.findAll().then((music) => {
      res.status(200).send({ message: 'Songs fetched successfully', music })
    })
  }

  static addMusic(req, res) {
    MusicModel.create({
      title: req.body.title,
      album: req.body.album,
      genres: req.body.genres,
      length: req.body.length,
      year: req.body.year,
      artist: req.body.artist,
      producer: req.body.producer,
      video: req.body.video,
      lyrics: req.body.length
    }).then((newMusic) =>
      res.status(201).send({ message: 'Music added successfully', newMusic }))
  }

  static deleteMusic(req, res) {
    MusicModel.findByPk(req.params.id).then((music) => {
      if (!music) {
        return res.status(404).send({
          message: 'music not found'
        })
      }
      return music.destroy().then(() => res.status(204).send({
        message: 'music deleted successfully'
      }))
    })
  }
}

export default Music
