const sequelize = require('../config/connection');
const seedGenre = require('./genreData');
const seedSongs = require('./songData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenre();

  await seedSongs();

  process.exit(0);
};

seedAll();
