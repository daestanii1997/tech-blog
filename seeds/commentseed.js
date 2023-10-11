const Comment = require('../models');

const commentseedData = [
    {
        id: 1,
        comment_content: 'Definitely not a test.',
        parent_post: 1,
        user_id: 1,
    },
];

const seedComments = async () => await Comment.bulkCreate(commentseedData);

module.exports = seedComments;