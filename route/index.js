import { Router } from 'express'
var router = Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.send({ message: 'Welcome to Books Api' })
})

export default router
