/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import chai from 'chai'
import supertest from 'supertest'
import bcrypt from 'bcryptjs'
import server from '../app'
import models from '../models'

const request = supertest.agent(server)
const UserModel = models.User

// eslint-disable-next-line no-unused-vars
const should = chai.should()
const { expect } = chai

describe('User test', () => {
  before(async () => {
    // add a user to the database
    await UserModel.create({
      firstName: 'Fashola',
      lastName: 'Olaniyi',
      email: 'olaniyifashola14@gmail.com',
      hash: bcrypt.hashSync('password', 8)
    })
  })
  after(async () => {
    // empty the database
    await UserModel.destroy({ where: {} })
  })

  describe('User Sign up tests', () => {
    // Test Sign up - first name not provided
    it('should return first name is required', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: '',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14@gmail.com',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal('First name is required')
          done()
        })
    })

    // Test Sign up - non letters characters provided as first name
    it('should return Only alphabets allowed in first name', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'jsdjf6sddj',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14@gmail.com',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal(
            'Only alphabets allowed in first name'
          )
          done()
        })
    })

    // Test Sign up - last name not provided
    it('should return last name is required', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: '',
          email: 'olaniyifashola14@gmail.com',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal('Last name is required')
          done()
        })
    })

    // Test Sign up - non letters characters provided as last name
    it('should return Only alphabets allowed in last name', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olani74yi',
          email: 'olaniyifashola14@gmail.com',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal(
            'Only alphabets allowed in last name'
          )
          done()
        })
    })

    // Test Sign up - email not provided
    it('should return email is required if no email is provided', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olaniyi',
          email: '',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal('Email is required')
          done()
        })
    })

    // Test Sign up - email not valid
    it('should return email invalid if invalid email is provided', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14.com',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal('Email Invalid')
          done()
        })
    })

    // Test Sign up - password not provided
    it('should return password is required', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14@gmail.com',
          password: ''
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal('Password is required')
          done()
        })
    })
    // Test Sign up - password provided not long enough
    it('should return Password must be at least 8 characters long', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14@gmail.com',
          password: 'hhf6'
        })
        .end((err, res) => {
          expect(res.status).to.equal(400)
          expect(res.body.message).to.equal(
            'Password must be at least 8 characters long'
          )
          done()
        })
    })

    // Test Sign up - password with uppercase not provided
    it('should return error if password does not match criteria', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14@gmail.com',
          password: 'hdjsksksdsmd'
        })
        .end((err, res) => {
          expect(res.status).to.equal(404)
          expect(res.body.message).to.equal(
            'password must contain at least one uppercase letter, one special character and one number'
          )
          done()
        })
    })

    // Test Sign up - user trying to register with an exisiting email
    it('should return User Already Exists', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fashola',
          lastName: 'Olaniyi',
          email: 'olaniyifashola14@gmail.com',
          password: 'HkAkskd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(409)
          expect(res.body.message).to.equal('User Already Exists')
          done()
        })
    })

    // Test Sign up - user created
    it('should return Sign Up Successful', (done) => {
      request
        .post('/users/signup')
        .send({
          firstName: 'Fash',
          lastName: 'Ola',
          email: 'olaniyi14@gmail.com',
          password: 'Hks5,kd34;dpf;'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201)
          expect(res.body.message).to.equal('Sign Up Successful')
          done()
        })
    })
  })
})
