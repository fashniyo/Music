/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Music', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      album: {
        type: Sequelize.STRING
      },
      genres: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      artist: {
        type: Sequelize.STRING
      },
      producer: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      lyrics: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Music')
}
