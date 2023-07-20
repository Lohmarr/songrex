const router = require('express').Router();
const { Genre, Song } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all genres for homepage
router.get('/', async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll({
      include: [
        {
          model: Song,
          attributes: ['title', 'artist'],
        },
      ],
    });

    const genres = dbGenreData.map((genre) =>
    genre.get({ plain: true })
    );

    res.render('homepage', {
      genres,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one genre
// Use the custom middleware before allowing the user to access the genre
router.get('/genre/:id', withAuth, async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [
        {
          model: Song,
          attributes: [
            'id',
            'title',
            'artist',
            'embed',
          ],
        },
      ],
    });

    const genre = dbGenreData.get({ plain: true });
    res.render('genre', { genre, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one song
// Use the custom middleware before allowing the user to access the song
router.get('/song/:id', withAuth, async (req, res) => {
  try {
    const dbSongData = await Song.findByPk(req.params.id);

    const song = dbSongData.get({ plain: true });

    res.render('song', { song, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/input', (req, res) => {
  res.render('input', { loggedIn: req.session.loggedIn });
});

router.get('/liked', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const likedData = await Song.findAll({where: {liked: true}}).catch((err) => { 
    res.json(err);
  });
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
  const songs = likedData.map((song) => song.get({ plain: true }));
  console.log(songs)
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('liked', { songs, loggedIn: req.session.loggedIn });
});

module.exports = router;
