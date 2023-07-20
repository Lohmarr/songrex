const router = require('express').Router();
const { Song } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new song
router.post('/', withAuth, async (req, res) => {
  try {
    const dbSongData = await Song.create({
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      embed: req.body.embed,
      genre_id: req.body.genre_id,
    });

    res.status(200).json(dbSongData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;