const router = require('express').Router();
const { Song } = require("../../models");
const { LikedSong } = require('../../models')
const withAuth = require("../../utils/auth");

// LIKE song
router.post('/:id', withAuth, async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) {
      res.status(404).json({ message: 'Song not found' });
      return;
    }
    

    const likedSong = await LikedSong.create({
      userId: req.session.user_id,
      songId: song.id,
    });

    res.status(200).json(likedSong);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
