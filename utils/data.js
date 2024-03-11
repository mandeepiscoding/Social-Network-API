const mongoose = require('mongoose');

const first = [
    'Zoe',
    'Jackson',
    'Mia',
    'Christopher',
    'Aiden',
    'Isabella',
    'Sophia',
    'Emma',
    'Victoria',
    'Chloe',
    'Lucas',
    'Liam',
    'Daniel',
    'Logan',
    'Madison',
    'Charlotte',
    'Alexander',
    'Olivia',
    'Layla',
    'Gabriel',
    'Penelope',
    'Riley',
    'Xavier',
    'Matthew',
    'Benjamin',
    'Harper',
    'David',
    'Elijah',
    'Natalie',
    'Scarlett',
];

const last = [
    'Brown',
    'Robinson',
    'Hernandez',
    'Williams',
    'Garcia',
    'Perry',
    'Walker',
    'Clark',
    'Moore',
    'Nguyen',
    'Adams',
    'Smith',
    'Thompson',
    'Bell',
    'Turner',
    'Foster',
    'Ramirez',
    'Lee',
    'Stewart',
    'Jones',
    'Thomas',
    'Wilson',
    'Jackson',
    'Murphy',
    'Carter',
    'Lewis',
    'King',
    'Martinez',
    'Barnes',
    'Green',
];

const thoughts = [
    'Living for the weekend vibes.',
    'Trusting the journey',
    'Ready for new beginnings',
    'Sunsets make everything better.',
    'Time to adult... reluctantly.',
    'Plot twist: life is unpredictable.',
    'Feeling grateful for small wins.',
    'In need of a digital detox',
    'Making memories, not excuses.',
    'Positive vibes only',
    'Reality called, I hung up.',
    'Lost in a book\'s world',
    'Embracing imperfections',
    'Dancing through life',
    'Kindness is contagious',
    'Procrastination level: expert',
    'Adventure awaits',
    'Today\'s goal: find joy in small things.',
    'Learning to let go',
    'Keepin\' it real, always.',
    'Living that #blessed life',
    'Grateful for good friends',
    'Sun-kissed and salty hair',
    'Rainy days call for cozy reads',
    'Adventure is out there',
    'Current mood: Netflix & snacks',
    'Ready for a fresh start',
    'Slaying one day at a time.',
    'Finding beauty in simplicity.',
    'Music = therapy',
];

const reactions = [
    'Fantastic!',
    'Super!',
    'Yay!',
    'LOL!',
    'Nice!',
    'Woot!',
    'Adorable!',
    'Rad!',
    'Amazing!',
    'Love it!',
    'Genius!',
    'Sweet!',
    'Thrilling!',
    'Top!',
    'Fabulous!',
    'Hooray!',
    'Clever!',
    'Bravo!',
    'Perfect!',
    'Spot on!',
    'Beautiful!',
    'Fun!',
    'Great!',
    'Cheers!',
    'Remarkable!',
    'Excellent!',
    'Haha!',
    'So true!',
    'Cute!',
    'Impressive!',
    'OMG!',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get random name by combining random elements from first and last arrays
const getRandomName = () => getRandomArrItem(first) + ' ' + getRandomArrItem(last);

// Generate random thoughts where 'int' is number of thoughts, 'thoughtIdArray' is an array of thought ids
// username is the user the thought is assigned to, and reactionCount specifies the number of reactions
const getRandomThoughts = (int, thoughtIdArray, username, reactionCount) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        let reactionArray = [...getThoughtReactions(reactionCount)];
        results.push({
            _id: thoughtIdArray[i],
            thoughtText: getRandomArrItem(thoughts),
            username: username,
            reactions: reactionArray,
        });
    }
    return results;
};

// Generate 'int' number of reactions to a thought
const getThoughtReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomName(),
            reactionId: new mongoose.Types.ObjectId()
        });
    }
    return results;
};

module.exports = { getRandomName, getRandomThoughts };