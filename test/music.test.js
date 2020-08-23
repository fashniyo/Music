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
let newMusic = {}

// eslint-disable-next-line no-undef
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
    newMusic = await MusicModel.create({
      title: 'update music test',
      album: 'update album test',
      genres: 'update RnB',
      length: '4:23',
      rating: 5,
      likes: 1500,
      year: 2030,
      artist: 'update artist test',
      producer: 'update producer test',
      video: 'wdavalible',
      lyrics: 'update hdgvvs dhsnans dfbfhsh'
    })
    after(async () => {
      // empty the database
      await MusicModel.destroy({ where: {} })
    })

    describe('Index route', () => {
      it('should return welcome message when / route is matched', (done) => {
        request.get('/').end((err, res) => {
          res.status.should.be.equal(200)
          expect(res.body.message).be.equal('Welcome to Music House Api')
          done()
        })
      })
      describe('/GET Get all music', () => {
        it('it should GET all the music', (done) => {
          request.get('/music').end((err, res) => {
            res.status.should.be.equal(200)
            expect(res.body.music).to.be.an('array')
            expect(res.body.message).be.equal('Songs fetched successfully')
            done()
          })
        })
      })
    })
  })
  describe('Update music route', () => {
    it('should UPDATE a music given the id', (done) => {
      request
        .put(`/music/${newMusic.id}`)
        .send({
          title: 'update music test',
          album: 'update album test',
          genres: 'update RnB',
          length: '4:23',
          rating: 5,
          likes: 1500,
          year: 2030,
          artist: 'update artist test',
          producer: 'update producer test',
          video: 'wdavalible',
          lyrics: 'update hdgvvs dhsnans dfbfhsh'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body.message).be.equal('Music updated successfully')
          done()
        })
    })
  })
})
