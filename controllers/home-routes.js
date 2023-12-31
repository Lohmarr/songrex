const router = require("express").Router();
const { Genre, Song, LikedSong, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all genres for homepage
router.get("/", async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll({
      include: [
        {
          model: Song,
          attributes: ["title", "artist"],
        },
      ],
    });

    const genres = dbGenreData.map((genre) => genre.get({ plain: true }));

    res.render("homepage", {
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
router.get("/genre/:id", withAuth, async (req, res) => {
  try {
    const dbGenreData = await Genre.findByPk(req.params.id, {
      include: [
        {
          model: Song,
          attributes: ["id", "title", "artist", "embed"],
        },
      ],
    });

    const genre = dbGenreData.get({ plain: true });
    const genreName = genre.name;
    console.log(genreName);

    res.render("genre", { genre, genreName, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all songs
router.get("/songs", withAuth, async (req, res) => {
  try {
    const dbSongData = await Song.findAll();
    const songs = [];

    for (const song of dbSongData) {
      const songData = song.get({ plain: true });
      const songGenreId = songData.genre_id;
      
      const dbGenreData = await Genre.findByPk(songGenreId);
      const genre = dbGenreData.get({ plain: true });
      const genreName = genre.name;

      songData.genreName = genreName;
      songs.push(songData);
    }

    res.render("songs", { songs, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one song
router.get("/song/:id", withAuth, async (req, res) => {
  try {
    const songData = await Song.findByPk(req.params.id);

    const song = songData.get({ plain: true });

    // Check if the current user has liked the song
    let isLiked = false;
    const likedSong = await LikedSong.findOne({
      where: {
        songId: req.params.id,
        userId: req.session.user_id,
      },
    });

    // If the user has liked the song, isLiked equals true
    if (likedSong != null) {
      isLiked = true;
    }

    res.render("song", { song, isLiked, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/input", (req, res) => {
  res.render("input", { loggedIn: req.session.loggedIn });
});

router.get("/liked", withAuth, async (req, res) => {
  try {
    const likedSongs = await LikedSong.findAll({
      where: {
        userId: req.session.user_id,
      },
      include: [Song],
    });

    const songs = [];

    for (let i = 0; i < likedSongs.length; i++) {
      const song = await likedSongs[i].getSong();
      const songGenreId = song.genre_id;

      const dbGenreData = await Genre.findByPk(songGenreId);
      const genre = dbGenreData.get({ plain: true });
      const genreName = genre.name;

      song.genreName = genreName;
      songs.push(song);
    }

    console.log("songs ==========================", songs);

    res.render("liked", {
      songs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
