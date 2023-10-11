const Post = require('../models/blogpost');

const postSeedData = [
    {
        id: 1,
        post_title: 'This may, or may not be a test..',
        user_id: 1,
    },
];

const seedBlogPosts = async () => await Post.bulkCreate(postSeedData);

module.exports = seedBlogPosts;