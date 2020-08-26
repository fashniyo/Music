/* eslint-disable comma-dangle */
import validator from 'validator'
import { hasUpperCase, hasSpecialChar, hasNumber } from '../Utils/Strings'

// eslint-disable-next-line consistent-return
const validateSignup = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName) {
    return res.status(400).send({
      message: 'First name is required'
    })
  }
  if (!validator.isAlpha(firstName)) {
    return res.status(400).send({
      message: 'Only alphabets allowed in first name'
    })
  }
  if (!lastName) {
    return res.status(400).send({
      message: 'Last name is required'
    })
  }
  if (!validator.isAlpha(lastName)) {
    return res.status(400).send({
      message: 'Only alphabets allowed in last name'
    })
  }
  if (!email) {
    return res.status(400).send({
      message: 'Email is required'
    })
  }
  if (!validator.isEmail(email)) {
    return res.status(400).send({
      message: 'Email Invalid'
    })
  }
  if (!password) {
    return res.status(400).send({
      message: 'Password is required'
    })
  }
  if (password.length < 8) {
    return res.status(400).send({
      message: 'Password must be at least 8 characters long'
    })
  }
  if (
    !hasUpperCase(password) ||
    !hasSpecialChar(password) ||
    !hasNumber(password)
  ) {
    return res.status(404).send({
      message:
        'password must contain at least one uppercase letter, one special character and one number'
    })
  }
  next()
}

export default validateSignup
