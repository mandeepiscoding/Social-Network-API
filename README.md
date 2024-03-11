# Social Network API

This API provides endpoints for managing users, thoughts, reactions, and friendships within a social network application.

## Table of Contents

- [Usage](#usage)
  - [GET Routes](#get-routes)
  - [POST Routes](#post-routes)
  - [PUT Routes](#put-routes)
  - [DELETE Routes](#delete-routes)

## Usage

1. Start the server and sync Mongoose models with the MongoDB database by invoking the application.

2. Open Insomnia or a similar API testing tool.

3. Test the following routes:

### GET Routes

- `/api/users`: Retrieve data for all users in a formatted JSON.
- `/api/thoughts`: Retrieve data for all thoughts in a formatted JSON.

### POST Routes

- `/api/users`: Create a new user.
- `/api/thoughts/:userId`: Create a new thought for a specific user.
- `/api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `/api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.

### PUT Routes

- `/api/users/:userId`: Update user information.
- `/api/thoughts/:thoughtId`: Update thought information.

### DELETE Routes

- `/api/users/:userId`: Delete a user.
- `/api/thoughts/:thoughtId`: Delete a thought.
- `/api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.
- `/api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

## Copyright

&copy; 2024 Social Network API. All rights reserved.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)