import express from 'express'
import User from '../plugins/users'
import validateSignup from '../validators/validateUserSignUp'
import validateSignIn from '../validators/validateSignIn'

const router = express.Router()

router.post('/signup', validateSignup, User.signUp)
router.post('/signin', validateSignIn, User.signIn)

module.exports = router
