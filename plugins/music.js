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
}

export default Music
