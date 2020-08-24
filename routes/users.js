import express from 'express'
import User from '../plugins/users'

const router = express.Router()

router.post('/signup', User.signUp)

module.exports = router
