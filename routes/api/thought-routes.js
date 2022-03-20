const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/:userId')
  .get(getAllThoughts)
  .post(addThought);

router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .get(updateThought)
  .delete(removeThought);

  router
  .route('/:userId/:thoughtId/reactions')
  .put(addReaction)

  router
  .route('/:userId/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;