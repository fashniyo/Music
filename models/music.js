module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    title: DataTypes.STRING,
    album: DataTypes.STRING,
    genres: DataTypes.STRING,
    length: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    producer: DataTypes.STRING,
    video: DataTypes.STRING,
    lyrics: DataTypes.TEXT
  }, {});

  return Music;
}
