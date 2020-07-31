/* eslint-disable radix */
import { Op } from 'sequelize'
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
      return music.destroy().then(() =>
        res.status(204).send({
          message: 'music deleted successfully'
        }))
    })
  }

  static updateMusic(req, res) {
    const id = parseInt(req.params.id)
    MusicModel.findByPk(id).then((music) => {
      music
        .update({
          title: req.body.title || music.title,
          album: req.body.album || music.album,
          genres: req.body.genres || music.genres,
          length: req.body.length || music.length,
          rating: music.likes,
          likes: music.likes,
          year: req.body.year || music.year,
          artist: req.body.artist || music.artist,
          producer: req.body.producer || music.producer,
          video: req.body.video || music.video,
          lyrics: req.body.length || music.lyrics
        })
        .then((updatedmusic) => {
          res
            .status(200)
            .send({ message: 'Music updated successfully', updatedmusic })
        })
    })
  }

  static searchTitle(req, res) {
    MusicModel.findAll({
      where: {
        title: {
          [Op.substring]: `%${req.query.title}%`
        }
      }
    }).then((music) => {
      res.status(200).send({ music })
    })
  }

  static musicId(req, res) {
    const id = parseInt(req.params.id)
    MusicModel.findOne({
      where: {
        id
      }
    }).then((music) => {
      if (!music) {
        return res.status(404).send({ message: 'music not found' })
      }
      return res.status(200).send({
        message: `Single Music found ${id} sucessfully`,
        music
      })
    })
  }

  static searchGenre(req, res) {
    MusicModel.findAll({
      where: {
        genres: {
          [Op.substring]: `%${req.query.genres}%`
        }
      }
    }).then((music) => {
      res.status(200).send({ music })
    })
  }

  static searchArtist(req, res) {
    MusicModel.findAll({
      where: {
        artist: {
          [Op.substring]: `%${req.query.artist}%`
        }
      }
    }).then((music) => {
      res.status(200).send({ music })
    })
  }

  static searchAlbum(req, res) {
    MusicModel.findAll({
      where: {
        album: {
          [Op.substring]: `%${req.query.album}%`
        }
      }
    }).then((music) => {
      res.status(200).send({ music })
    })
  }

  static musicYear(req, res) {
    if (req.query.year) {
      const year = parseInt(req.query.year)
      MusicModel.findAll({
        where: {
          year: {
            [Op.eq]: year
          }
        }
      }).then((music) => {
        res.status(200).send({ music })
      })
    }
    if (req.query.year_greater_than) {
      const year = parseInt(req.query.year_greater_than)
      MusicModel.findAll({
        where: {
          year: {
            [Op.gt]: year
          }
        }
      }).then((music) => {
        res.status(200).send({ music })
      })
    }
    if (req.query.year_less_than) {
      const year = parseInt(req.query.year_less_than)
      MusicModel.findAll({
        where: {
          year: {
            [Op.lt]: year
          }
        }
      }).then((music) => {
        res.status(200).send({ music })
      })
    }
  }

  static musicLikes(req, res) {
    if (req.query.likes) {
      const likes = parseInt(req.query.likes)
      MusicModel.findAll({
        where: {
          likes: {
            [Op.eq]: likes
          }
        }
      }).then((music) => {
        res.status(200).send({ music })
      })
    }
    if (req.query.likes_greater_than) {
      const likes = parseInt(req.query.likes_greater_than)
      MusicModel.findAll({
        where: {
          likes: {
            [Op.gt]: likes
          }
        }
      }).then((music) => {
        res.status(200).send({ music })
      })
    }
    if (req.query.likes_less_than) {
      const likes = parseInt(req.query.likes_less_than)
      MusicModel.findAll({
        where: {
          likes: {
            [Op.lt]: likes
          }
        }
      }).then((music) => {
        res.status(200).send({ music })
      })
    }
  }

  static musicRating(req, res) {
    if (req.query.rating) {
      const rating = parseInt(req.query.rating)
      MusicModel.findAll({
        where: {
          rating: {
            [Op.eq]: rating
          }
        }
      }).then((music) => {
        res.status(200).send({
          music
        })
      })
    }
    if (req.query.rating_greater_than) {
      const rating = parseInt(req.query.rating_greater_than)
      MusicModel.findAll({
        where: {
          rating: {
            [Op.gt]: rating
          }
        }
      }).then((music) => {
        res.status(200).send({
          music
        })
      })
    }
    if (req.query.rating_less_than) {
      const rating = parseInt(req.query.rating_less_than)
      MusicModel.findAll({
        where: {
          rating: {
            [Op.lt]: rating
          }
        }
      }).then((music) => {
        res.status(200).send({
          music
        })
      })
    }
  }
}

export default Music
