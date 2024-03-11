const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');
const mongoose = require('mongoose');

connection.on('error', (err) => err);

connection.once('open', async () => {
    // Establishing connection
    console.log('connected');

    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Define seeding parameters
    const userCount = 3;
    const friendCount = 1;
    const thoughtCount = 1;
    const reactionCount = 1;

    // Initialize arrays to store generated data
    const users = [];
    const userIdArray = [];

    // Generate unique IDs for users
    for (let i = 0; i < userCount; i++) {
        userIdArray.push(new mongoose.Types.ObjectId());
    }

    // Create users
    for (let i = 0; i < userCount; i++) {
        const _id = userIdArray[i];
        const username = getRandomName();
        const email = `${username.replace(' ', '')}@gmail.com`;
        const friends = [];

        // Assign friends for each user
        for (let j = 0; j < friendCount; j++) {
            let index;
            if (i + j + 1 >= userCount) {
                index = (i + j + 1) % userCount;
            } else {
                index = i + j + 1;
            }
            friends.push(userIdArray[index]);
        }

        // Generate unique IDs for thoughts
        let thoughtIdArray = [];
        for (let j = 0; j < thoughtCount; j++) {
            thoughtIdArray.push(mongoose.Types.ObjectId());
        }

        // Generate random thoughts for each user
        const thoughts = getRandomThoughts(thoughtCount, thoughtIdArray, username, reactionCount);
        console.table(thoughts);
        await Thought.collection.insertMany(thoughts);

        // Populate users array with user objects
        users.push({
            _id,
            username,
            email,
            friends,
            thoughts: thoughtIdArray,
        });
    }

    // Insert generated users into database
    await User.collection.insertMany(users);

    // Output generated users
    console.table(users);
    console.info('Seeding complete!');
    process.exit(0);
});