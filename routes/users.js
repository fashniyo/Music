import { Router } from 'express'

const router = Router()

/* GET users listing. */
router.get('/', (_req, res) => {
  res.send('respond with a resource')
})

module.exports = router

// import express from 'express'
// import User from '../plugins/user'

// const router = express.Router()

// router.post('/signin', User.signIn)
// router.post('/signup', User.signUp)

// module.exports = router
