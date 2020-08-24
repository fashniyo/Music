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
let musicToDelete = {}

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
      year: 2500,
      artist: 'update artist test',
      producer: 'update producer test',
      video: 'wdavalible',
      lyrics: 'update hdgvvs dhsnans dfbfhsh'
    })
    musicToDelete = await MusicModel.create({
      title: 'delete music test',
      album: 'delete album test',
      genres: 'delete RnB',
      length: '23:23',
      year: 2700,
      artist: 'delete artist test',
      producer: 'delete producer test',
      video: 'saasasd',
      lyrics: 'delete hdgvvs dhsnans dfbfhsh'
    })
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

  describe('Update music route', () => {
    it('should UPDATE a music given the id', (done) => {
      request
        .put(`/music/${newMusic.id}`)
        .send({
          title: 'update music test',
          album: 'update album test',
          genres: 'update RnB',
          length: '4:23',
          year: '2500',
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
    it('should return music with this id does not exist', (done) => {
      request
        .put('/music/754342')
        .send({
          title: 'update music test',
          album: 'update album test',
          genres: 'update RnB',
          length: '4:23',
          year: '2500',
          artist: 'update artist test',
          producer: 'update producer test',
          video: 'wdavalible',
          lyrics: 'update hdgvvs dhsnans dfbfhsh'
        })
        .end((err, res) => {
          res.status.should.be.equal(404)
          expect(res.body.message).be.equal('Music not found')
          done()
        })
    })
    it('should return Year must be a number if the year passed isnt a number', (done) => {
      request
        .put(`/music/${newMusic.id}`)
        .send({
          title: 'update music test',
          album: 'update album test',
          genres: 'update RnB',
          length: '4:23',
          year: 'nfjmhn',
          artist: 'update artist test',
          producer: 'update producer test',
          video: 'wdavalible',
          lyrics: 'update hdgvvs dhsnans dfbfhsh'
        })
        .end((err, res) => {
          res.status.should.be.equal(400)
          expect(res.body.message).be.equal('Year must be a number')
          done()
        })
    })
    it('should return title cannot be empty if user doesnt put a title', (done) => {
      request
        .put(`/music/${newMusic.id}`)
        .send({
          title: '',
          album: 'update album test',
          genres: 'update RnB',
          length: '4:23',
          year: 2500,
          artist: '',
          producer: 'update producer test',
          video: 'wdavalible',
          lyrics: 'update hdgvvs dhsnans dfbfhsh'
        })
        .end((err, res) => {
          res.status.should.be.equal(400)
          expect(res.body.message).be.equal('Title cannot be empty')
          done()
        })
    })
    it('should return artist cannot be empty if user doesnt put an artist', (done) => {
      request
        .put(`/music/${newMusic.id}`)
        .send({
          title: 'update music test',
          album: 'update album test',
          genres: 'update RnB',
          length: '4:23',
          year: 2500,
          artist: '',
          producer: 'update producer test',
          video: 'wdavalible',
          lyrics: 'update hdgvvs dhsnans dfbfhsh'
        })
        .end((err, res) => {
          res.status.should.be.equal(400)
          expect(res.body.message).be.equal('Artist cannot be empty')
          done()
        })
    })
  })

  describe('Add music route', () => {
    it('should Add Music', (done) => {
      request
        .post('/music')
        .send({
          title: 'add music',
          album: 'add album',
          genres: 'add genre',
          length: '65:63',
          year: '2037',
          artist: 'add artist',
          producer: 'add producer',
          video: 'add video',
          lyrics: 'add lyrics'
        })
        .end((err, res) => {
          res.status.should.be.equal(201)
          expect(res.body.message).be.equal('Music added successfully')
          done()
        })
    })
    it('should Add Book when id does not exist', (done) => {
      request
        .post('/music/2222')
        .send({
          title: 'add music',
          album: 'add album',
          genres: 'add genre',
          length: '65:63',
          year: 2037,
          artist: 'add artist',
          producer: 'add producer',
          video: 'add video',
          lyrics: 'add lyrics'
        })
        .end((err, res) => {
          res.status.should.be.equal(404)
          expect(res.body.message).be.equal(undefined)
          done()
        })
    })
    it('should return Year must be a number if the year passed isnt a number', (done) => {
      request
        .post('/music')
        .send({
          title: 'add music',
          album: 'add album',
          genres: 'add genre',
          length: '65:63',
          year: 'hdhwd',
          artist: 'add artist',
          producer: 'add producer',
          video: 'add video',
          lyrics: 'add lyrics'
        })
        .end((err, res) => {
          res.status.should.be.equal(400)
          expect(res.body.message).be.equal('Year must be a number')
          done()
        })
    })
    it('should return title cannot be empty if user doesnt put a title', (done) => {
      request
        .post('/music')
        .send({
          title: '',
          album: 'add album',
          genres: 'add genre',
          length: '65:63',
          year: 2037,
          artist: 'add artist',
          producer: 'add producer',
          video: 'add video',
          lyrics: 'add lyrics'
        })
        .end((err, res) => {
          res.status.should.be.equal(400)
          expect(res.body.message).be.equal('Title cannot be empty')
          done()
        })
    })
    it('should return writer cannot be empty if user doesnt put an writer', (done) => {
      request
        .post('/music')
        .send({
          title: 'add music',
          album: 'add album',
          genres: 'add genre',
          length: '65:63',
          year: 2037,
          artist: '',
          producer: 'add producer',
          video: 'add video',
          lyrics: 'add lyrics'
        })
        .end((err, res) => {
          res.status.should.be.equal(400)
          expect(res.body.message).be.equal('Artist cannot be empty')
          done()
        })
    })
  })

  describe('Delete music', () => {
    it('should DELETE a music given the id', (done) => {
      request.delete(`/music/${musicToDelete.id}`).end((err, res) => {
        res.status.should.be.equal(204)
        done()
      })
    })
    it('should return music does not exist', (done) => {
      request.delete('/music/808020').end((err, res) => {
        res.status.should.be.equal(404)
        expect(res.body.message).be.equal('music not found')
        done()
      })
    })
  })

  describe('Get single music', () => {
    it('it should GET a music by id', (done) => {
      request.get(`/music/${newMusic.id}`).end((err, res) => {
        res.status.should.be.equal(200)
        res.body.should.be.a('object')
        expect(res.body.music).to.have.property('title')
        expect(res.body.music).to.have.property('artist')
        expect(res.body.music).to.have.property('year')
        done()
      })
    })
    it('it should GET a music by id', (done) => {
      request.get('/music/8888').end((err, res) => {
        res.status.should.be.equal(404)
        expect(res.body.message).to.equal('music not found')
        done()
      })
    })
  })

  describe('Get Book By title route', () => {
    it('should get book by title', (done) => {
      request
        .get('/musics/title')
        .query({ title: 'update music test' })
        .end((err, res) => {
          res.status.should.be.equal(200)
          expect(res.body.data).to.be.an('array')
          done()
        })
    })
  })
})
