const User = require('./User');
const Genre = require('./Genre');
const Song = require('./Song');
const LikedSong = require('./LikedSong')

Genre.hasMany(Song, {
  foreignKey: 'genre_id',
});

Song.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

Song.hasMany(LikedSong, {
  foreignKey: 'songId',
  onDelete: 'CASCADE'
})

User.hasMany(LikedSong, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

LikedSong.belongsTo(User, {
  foreignKey: 'userId',
});

LikedSong.belongsTo(Song, {
  foreignKey: 'songId',
});

module.exports = { User, Genre, Song, LikedSong };
