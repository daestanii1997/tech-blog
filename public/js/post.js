// front end post logic
const newPostFormHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector("#new-post-title").value;
    const postContent = document.querySelector("#new-post-content").value;

    if (postTitle && postContent) {
        const response = await fetch('/api/blogpost/post', {
            method: 'POST',
            body: JSON.stringify({ 
                post_title: postTitle, 
                post_content: postContent 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector("#new-post-form").addEventListener("submit", newPostFormHandler);

// Delete post event handler
document.querySelector(".delete-post").addEventListener("click", function(){
    let id =  this.getAttribute("data-id");

    const response = fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response) {
        document.location.replace('/homepage');
    } 
    else {
        alert(response.statusText);
    }

    return;
})

// TODO: New comment event handler
const newCommentFormHandler = async (event) => {
    // get remaining required fields
    const newComment = document.querySelector("#comment-input").value;

    if (newComment) {
        const response = await fetch('/api/blogpost/:id/comment', {
            method: 'POST',
            // get remaining required fields
            body: JSON.stringify({
                newComment
            }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            console.log(newComment);
            return
        } else {
            alert(response.statusText);
        }
    }
}

//document.querySelector("#comment-form").addEventListener("submit", newCommentFormHandler);