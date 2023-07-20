const { Genre } = require('../models');

const genreData = [
  {
    name: 'Rock',
    image_name: 'rockgenre.jpg',
  },
  {
    name: 'Rap',
    image_name: 'rapgenre.jpg',
  },
  {
    name: 'Country',
    image_name: 'countrygenre.jpg',
  },
  {
    name: 'Pop',
    image_name: 'popgenre.jpg',
  },
  {
    name: 'Indie',
    image_name: 'indiegenre.jpg',
  },
  {
    name: 'Funk',
    image_name: 'funkgenre.jpg',
  },
  {
    name: 'Electronic',
    image_name: 'electronicgenre.jpg',
  }
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;
