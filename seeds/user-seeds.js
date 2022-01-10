const { User } = require('../models');

const userData = [
    {
        username: 'ahmedlotfey',
        password: '123456789',
        email: 'me@alotfey.com'
    },
    {
        username: 'aliali',
        password: '123456789',
        email: 'ali@alotfey.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
