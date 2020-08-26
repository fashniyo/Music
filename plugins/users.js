import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import models from '../models/index'

require('dotenv').config()

const rounds = 8
const UserModel = models.User
const secret = process.env.JWT_SECRET
let password = ''

class User {
  static signUp(req, res) {
    UserModel.findOne({
      where: {
        email: req.body.email
      }
      // eslint-disable-next-line consistent-return
    }).then((user) => {
      if (user) {
        return res.status(409).send({
          message: 'User Already Exists'
        })
      }
      UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hash: bcrypt.hashSync(req.body.password, rounds)
      }).then((newUser) =>
        res.status(201).send({
          message: 'Sign Up Successful',
          token: jwt.sign(
            {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              id: newUser.id
            },
            secret
          )
        }))
    })
  }

  static signIn(req, res) {
    UserModel.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found'
          })
        }
        password = bcrypt.compareSync(req.body.password, user.hash)
        if (password) {
          return res.status(200).send({
            message: 'Login Successful',
            token: jwt.sign(
              {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                id: req.body.id
              },
              secret
            )
          })
        }
        return res.status(401).send({
          message: 'Invalid Password'
        })
      })
      .catch((error) => res.status(500).send(error))
  }
}

export default User
