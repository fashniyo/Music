/* eslint-disable no-unused-vars */
import { expect } from 'chai'
import supertest from 'supertest'
import server from '../app'

const chai = require('chai')

const should = chai.should()

const request = supertest.agent(server)

// eslint-disable-next-line no-undef
describe('Index route', () => {
  // eslint-disable-next-line no-undef
  it('should return welcome message when / route is matched', (done) => {
    request.get('/').end((err, res) => {
      res.status.should.be.equal(200)
      expect(res.body.message).be.equal('Welcome to Music House Api')
      done()
    })
  })
})
