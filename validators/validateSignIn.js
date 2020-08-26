import isEmail from 'validator/lib/isEmail'

// eslint-disable-next-line consistent-return
const validateSignIn = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).send({
      message: 'Email is required'
    })
  }
  if (!isEmail(req.body.email)) {
    return res.status(400).send({
      message: 'Email Invalid'
    })
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password is required'
    })
  }
  next()
}

export default validateSignIn
