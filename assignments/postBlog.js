const postContainer = document.getElementById(postContainer);

document.getElementById('addPostBtn').addEventListner('click', function() {
    // Create a new HTML element
    const post = document.createElement('div'); 
    post.classlist.add("post");

    // Set the HTML content of the element
    post.innerhtml = `
        <label for="title">Title</label>
        <input type="text" placeholder="Enter Title"></input>

        <label for="body">Body</label>
        <textarea id="body" rows="20" cols="50"></textarea>

        <label for="tags">Tags</label>
        <input type="text" placeholder="Enter tags (comma separated)"></input>
        `;

    // Append the element to the DOM
    postContainer.appendchild(post);
});