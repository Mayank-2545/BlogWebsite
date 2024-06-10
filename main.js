document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    const blogsContainer = document.getElementById('blogs');

    blogForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        const date = document.getElementById('date').value.trim();

        // Validation messages
        const nameError = document.getElementById('nameError');
        const titleError = document.getElementById('titleError');
        const contentError = document.getElementById('contentError');
        const dateError = document.getElementById('dateError');
        
        let isValid = true;
        
        // Reset error messages
        nameError.textContent = '';
        titleError.textContent = '';
        contentError.textContent = '';
        dateError.textContent = '';
        
        // Validate name
        if (name === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else if (name.length < 3) {
            nameError.textContent = 'Name must be at least 3 characters long.';
            isValid = false;
        }

        // Validate title
        if (title === '') {
            titleError.textContent = 'Title is required.';
            isValid = false;
        } else if (title.length < 5) {
            titleError.textContent = 'Title must be at least 5 characters long.';
            isValid = false;
        }
        
        // Validate content
        if (content === '') {
            contentError.textContent = 'Content is required.';
            isValid = false;
        }

        // Validate date
        if (date === '') {
            dateError.textContent = 'Date is required.';
            isValid = false;
        }
        
        if (isValid) {
            // Create a new blog post element
            const blogPost = document.createElement('article');
            blogPost.classList.add('blog-post');
            
            const blogName = document.createElement('a');
            blogName.textContent = `By: ${name}`;
            
            const blogDate = document.createElement('span');
            blogDate.textContent = `${date}`;

            const blogTitle = document.createElement('header');
            blogTitle.textContent = title;
            
            const blogContent = document.createElement('p');
            blogContent.textContent = content;

            
            blogPost.appendChild(blogTitle);
            blogPost.appendChild(blogDate);
            blogPost.appendChild(blogName);
            blogPost.appendChild(blogContent);
            
            // Append the new blog post to the blogs container
            blogsContainer.appendChild(blogPost);

            // Reset the form
            blogForm.reset();
        }
    });
});
