const User = require('./User');
const Genre = require('./Genre');
const Song = require('./Song');

Genre.hasMany(Song, {
  foreignKey: 'genre_id',
});

Song.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

module.exports = { User, Genre, Song };
