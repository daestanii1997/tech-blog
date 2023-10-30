const router = require('express').Router();
const { Post, Comment} = require('../../models');

// Post route for new posts
// This route works!!
router.post('/post', async (req, res) => {
    try {
        const {post_title, post_content} = req.body;
        const user_id = req.session.user_id;
        const newPost = await Post.create({
            post_title: post_title,
            post_content: post_content,
            user_id: user_id,
        });
        res.json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// need to write delete route for posts (only accessed on blogpost page)
// This route works, need to implement user_id line when logged in.
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found!'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})
// TODO: need to write put route for updating posts (only accessed on blogpost page)

// router.put('/:id', async (req, res) => {
//     try {

//     }
// })


// Post route for new comments
// Test route
router.post('/comment', async (req, res) => {
    try {
        const { comment_content, parent_post} = req.body;
        const user_id = req.session.user_id;
        const newComment = await Comment.create({
            comment_content: comment_content,
            parent_post: parent_post,
            user_id: user_id,
        });
        res.json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// TODO: need to write delete route for comments
// sql error referring to the parent_post field???? something about the foreign key
router.delete('/comment/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found!'});
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;