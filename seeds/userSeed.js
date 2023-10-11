const User = require('../models');
const bcrypt = require('bcrypt');

// const hashPassword = async (pass) => {
//     const hashed = await bcrypt.hash(pass, 8);
//     return hashed
// };

const seedUsers = () => {
    // const hashed = await hashPassword('01234567');
    // const adminPassword = hashPassword('password');
    const userSeedData = [
        {
            username: 'admin',
            password: 'adminPassword'
        },
    ];
    User.bulkCreate(userSeedData);
}

module.exports = seedUsers;