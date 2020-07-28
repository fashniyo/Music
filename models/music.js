module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    genres: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    authors: DataTypes.STRING,
    publisher: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});

  return Music;
}
