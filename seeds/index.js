const seedBlogPosts = require('./blogpostSeed');
const seedUsers = require('./userSeed');
const seedComments = require('./commentseed');
const sequelize = require('../config/connection');

const seedEverything = async () => {
    await sequelize.sync({force:true});
    await seedUsers();
    console.log('\n USERS SYNCED \n');
    await seedBlogPosts();
    console.log('\n BLOG POSTS SYNCED \n');
    await seedComments();
    console.log('\n COMMENTS SYNCED \n');
    console.log('\n DATABASE SYNCED \n');
    process.exit();
};

seedEverything();
