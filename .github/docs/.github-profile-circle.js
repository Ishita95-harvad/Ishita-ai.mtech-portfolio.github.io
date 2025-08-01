// Function to create a circular GitHub profile picture
function createGitHubProfileCircle(username, size = 200, elementId = 'github-profile') {
    // Create container div if it doesn't exist
    let container = document.getElementById(elementId);
    if (!container) {
        container = document.createElement('div');
        container.id = elementId;
        document.body.appendChild(container);
    }

    // Set up the circular frame
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;
    container.style.borderRadius = '50%';
    container.style.overflow = 'hidden';
    container.style.border = '3px solid #ddd';
    container.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    container.style.transition = 'transform 0.3s ease';
    container.style.cursor = 'pointer';
    
    // Add hover effect
    container.addEventListener('mouseenter', () => {
        container.style.transform = 'scale(1.05)';
    });
    
    container.addEventListener('mouseleave', () => {
        container.style.transform = 'scale(1)';
    });

    // Create the image element
    const img = document.createElement('img');
    img.src = `https://github.com/${username}.png?size=${size}`;
    img.alt = `${username}'s GitHub profile picture`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    
    // Clear previous content and add the image
    container.innerHTML = '';
    container.appendChild(img);
    
    // Make the image clickable (links to GitHub profile)
    container.onclick = () => {
        window.open(`https://github.com/${username}`, '_blank');
    };

    // Optional: Add tooltip
    container.title = `Visit ${username}'s GitHub profile`;
}

// Example usage:
// createGitHubProfileCircle('your-github-username', 200, 'profile-container');
