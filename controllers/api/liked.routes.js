const router = require('express').Router();
const { Song } = require('../../models');
const withAuth = require('../../utils/auth');

// LIKE song
router.put('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
    const updatedSong = await Song.update(req.body, {
        where: {
            id: req.params.id   
        }
    })
    console.log(updatedSong)
    if (!updatedSong) {
        res.status(404).json({message: "you did bad"})
        return
    }
      res.status(200).json(updatedSong);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;