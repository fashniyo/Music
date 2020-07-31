import isNumeric from 'validator/lib/isNumeric'

// eslint-disable-next-line consistent-return
const validateAddMusic = (req, res, next) => {
  if (!req.body.title.trim()) {
    return res.status(400).send({ message: 'Title cannot be empty' })
  }
  if (!req.body.artist.trim()) {
    return res.status(400).send({ message: 'Artist cannot be empty' })
  }
  if (!isNumeric(req.body.year)) {
    return res.status(400).send({ message: 'Year must be a number' })
  }
  next()
}

export default validateAddMusic
