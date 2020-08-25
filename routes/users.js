import express from 'express'
import User from '../plugins/users'
import validateSignup from '../validators/validateUserSignUp'

const router = express.Router()

router.post('/signup', validateSignup, User.signUp)

module.exports = router
