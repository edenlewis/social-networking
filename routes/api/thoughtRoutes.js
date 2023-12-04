const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  deleteThought,
} = require('../../controllers/thought');

// /api/courses
router.route('/').get(getThoughts).post(createThoughts);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;