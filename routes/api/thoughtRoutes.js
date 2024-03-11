const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getThoughts);

// Create a new thought for a specific user
router.route('/:userId').post(createThought);

// GET, PUT, DELETE a single thought by its ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Add a reaction to a thought
router.route('/:thoughtId/reactions').post(addReaction);

// Remove a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;