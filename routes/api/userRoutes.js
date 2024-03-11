const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// GET all users and POST a new user
router.route('/').get(getUsers).post(createUser);

// GET, PUT, DELETE a single user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Add a friend to a user
router.route('/:userId/friends').post(addFriend);

// Remove a friend from a user
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;