/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Music',
      [
        {
          title: 'How Could You Leave Us',
          album: 'Therapy Session',
          genres: 'Rap',
          length: '5:32',
          rating: 8,
          likes: 1000,
          year: 2016,
          artist: 'NF',
          producer: 'Tommee Profitt',
          video: 'Available',
          lyrics:
            'How could you leave so unexpected? We waited, we waited For you, but you just left us We needed you, I needed you',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tossie Slide',
          album: 'Dark Lane Demo Tapes',
          genres: 'Trap',
          length: '5:12',
          rating: 8,
          likes: 1450,
          year: 2020,
          artist: 'Drake',
          producer: 'Ozan Yildirim',
          video: 'Available',
          lyrics:
            'Black leather glove, no sequins, Buckles on the jacket, it is Alyx shit, Nike crossbody, got a piece in it, Got a dance, but it is really on some street shit, I ma show you how to get it, It go right foot up, left foot, slide, Left foot up, right foot, slide, Basically, I am sayin either way, we bout to slide, ayy,Can it let this one slide, ayy',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bad Guy',
          album: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
          genres: ' Electropop · dance-pop · pop-trap · nu-goth pop',
          length: '3:14',
          rating: 10,
          likes: 5032,
          year: 2019,
          artist: 'Billie Eilish',
          producer: ' ‎Finneas O Connell',
          video: 'Available',
          lyrics:
            'So you are a tough guy, Like it really rough guy, Just can it get enough guy, Chest always so puffed guy, I am that bad type, Make your mama sad type, Make your girlfriend mad tight, Might seduce your dad type, I am the bad guy, Duh',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'wonma',
          album: '999',
          genres: '‎Afro Pop',
          length: '2:56',
          rating: 7,
          likes: 932,
          year: 2020,
          artist: 'Olamide',
          producer: 'Cracker Mallo',
          video: 'Not-Available',
          lyrics:
            'Hello hello hello hello hello Hello hello hello hello hello Oh boy oh boy Oh boy oh boy Ole te obirin lorun Ole te obirin lorun To ba te obirin lorun Ole te ashana lorun (Wonma do)',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Music', null, {})
  }
}
