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
  .route('/')
  .get(getAllThoughts)

router
  .route('/:userId')
  .post(addThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
  .post(addThought);

  router
  .route('/:thoughtId/reactions')
  .post(addReaction)

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;