// TODO: write front end post logic
const newPostFormHandler = async (event) => {
    event.preventDefault();

    // get remaining required fields
    const postTitle = document.querySelector("#new-post-title").value;
    const postContent = document.querySelector("#new-post-content").value;

    if (postTitle && postContent) {
        const response = await fetch('/api/blogpost/post', {
            method: 'POST',
            // get remaining required fields
            body: JSON.stringify({ 
                post_title: postTitle, 
                post_content: postContent 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(postTitle, postContent);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#new-post-form").addEventListener("submit", newPostFormHandler);

// New comment event handler
const newCommentFormHandler = async (event) => {
    // get remaining required fields
    const newComment = document.querySelector("#comment-input").value;

    if (newComment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            // get remaining required fields
            body: JSON.stringify({newComment}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            console.log(newComment);
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector("#comment-form").addEventListener("submit", newCommentFormHandler);