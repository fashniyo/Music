/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { expect } from 'chai'
import supertest from 'supertest'
import server from '../app'
import models from '../models'

const chai = require('chai')

const should = chai.should()

const request = supertest.agent(server)
const MusicModel = models.Music

describe('Music Api', () => {
  before(async () => {
    // create database tables
    await models.sequelize.sync()

    await MusicModel.create({
      title: 'music test',
      album: 'album test',
      genres: 'RnB',
      length: '10:50',
      rating: 7,
      likes: 1000,
      year: 2050,
      artist: 'artist test',
      producer: 'producer test',
      video: 'avalible',
      lyrics: 'hdgvvs dhsnans dfbfhsh'
    })
  })
  after(async () => {
    // empty the database
    await MusicModel.destroy({ where: {} })
  })

  describe('Welcome route', () => {
    it('should return welcome message when / route is matched', (done) => {
      request.get('/').end((err, res) => {
        res.status.should.be.equal(200)
        expect(res.body.message).be.equal('Welcome to Music House Api')
        done()
      })
    })
  })

  // describe('Get all music', () => {
  //   it('it should GET all the songs', (done) => {
  //     request.get('/music').end((err, res) => {
  //       res.status.should.be.equal(200)
  //       expect(res.body.music).to.be.an('array')
  //       expect(res.body.message).be.equal('Songs fetched successfully')
  //       done()
  //     })
  //   })
  // })
})
