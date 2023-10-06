// Get the models
const User = require('./user');
const Post = require('./blogpost');
const Comment = require('./comment');

// Users can have many posts
User.hasMany(Post, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Post.belongsTo(User);

// Users can have many comments
User.hasMany(Comment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Comment.belongsTo(User);

// Posts can have many comments
Post.hasMany(Comment, {
    onDelete: 'CASCADE'
});
Comment.belongsTo(Post);

// Export models
module.exports = { User, Post, Comment };