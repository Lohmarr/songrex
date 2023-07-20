const router = require('express').Router();

const userRoutes = require('./user-routes');
const inputRoutes = require('./input-routes')
const likedRoutes = require('./liked.routes')

router.use('/users', userRoutes);
router.use('/addSong', inputRoutes)
router.use('/like', likedRoutes)

module.exports = router;
