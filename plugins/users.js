/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import models from '../models/index'

require('dotenv').config()

const rounds = 8
const UserModel = models.User
const secret = process.env.JWT_SECRET

class User {
  static signUp(req, res) {
    UserModel.findOne({
      where: {
        email: req.body.email
      }
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
}

export default User
