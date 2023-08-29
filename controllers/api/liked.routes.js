const router = require('express').Router();
const { Song } = require("../../models");
const { LikedSong } = require('../../models')
const withAuth = require("../../utils/auth");

// LIKE or UNLIKE song
router.post('/:id', withAuth, async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) {
      res.status(404).json({ message: 'Song not found' });
      return;
    }

    const likedSong = await LikedSong.findOne({
      where: {
        userId: req.session.user_id,
        songId: song.id,
      },
    });

    if (likedSong) {
      // If the song is already liked, remove the like
      await likedSong.destroy();
      res.status(200).json({ liked: false });
    } else {
      // If the song is not liked, add the like
      await LikedSong.create({
        userId: req.session.user_id,
        songId: song.id,
      });
      res.status(200).json({ liked: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
