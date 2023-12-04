const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThoughts,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought');

// /api/thought
router.route('/')
.get(getThoughts)
.post(createThoughts);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought),
  // /api/thought/:thoughtId/reactions/:reactionId
  router
  .route('/:thoughtId/reaction/:reactionId')
  .post(addReaction)
  .delete(removeReaction)
module.exports = router;