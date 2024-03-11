const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomName, getRandomThoughts } = require("./data");
const mongoose = require("mongoose");

connection.on("error", (err) => err);

connection.once("open", async () => {
    console.log("connected");

    await User.deleteMany({});
    await Thought.deleteMany({});

    // Number of elements to seed
    const userCount = 3;
    const friendCount = 1; // must be no more than userCount - 1
    const thoughtCount = 1;
    const reactionCount = 1;

    const users = [];
    const userIdArray = [];

    for (let i = 0; i < userCount; i++) {
        userIdArray.push(new mongoose.Types.ObjectId())
    }

    for (let i = 0; i < userCount; i++) {
        const _id = userIdArray[i]
        const username = getRandomName();
        const email = `${username.replace(" ", "")}@gmail.com`;
        const friends = [];

        // Assigns 'friendCount' number of friends from 'userIdArray' ensuring self-exclusion
        for (let j = 0; j < friendCount; j++) {
            let index;
            if (i + j + 1 >= userCount) {
                index = (i + j + 1) % userCount;
            } else {
                index = i + j + 1;
            }
            friends.push(userIdArray[index]);
        }
        // Creates thoughts for each user and inserts to DB
        let thoughtIdArray = [];
        for (let j = 0; j < thoughtCount; j++) {
            thoughtIdArray.push(mongoose.Types.ObjectId())
        }
        const thoughts = getRandomThoughts(thoughtCount, thoughtIdArray, username, reactionCount);
        console.table(thoughts);
        await Thought.collection.insertMany(thoughts);

        //populate 'users' array with user objects
        users.push({
            _id,
            username,
            email,
            friends,
            thoughts: thoughtIdArray,
        });
    }

    await User.collection.insertMany(users);

    console.table(users);
    console.info("Seeding complete! 🌱");
    process.exit(0);
});