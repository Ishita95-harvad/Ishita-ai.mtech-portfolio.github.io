// Function to create a circular GitHub profile picture inside a target container
function createGitHubProfileCircle(username, size = 200, elementId = 'profile-circle') {
    let container = document.getElementById(elementId);

    // Create container if it doesn't exist
    if (!container) {
        container = document.createElement('div');
        container.id = elementId;
        document.body.appendChild(container);
    }

    // Apply circular frame styles
    Object.assign(container.style, {
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #ddd',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        margin: 'auto',
    });

    // Hover animation
    container.onmouseenter = () => container.style.transform = 'scale(1.05)';
    container.onmouseleave = () => container.style.transform = 'scale(1)';

    // Create profile image
    const img = document.createElement('img');
    img.src = `https://github.com/${username}.png?size=${size}`;
    img.alt = `${username}'s GitHub profile picture`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';

    // Replace content and link to GitHub
    container.innerHTML = '';
    container.appendChild(img);
    container.onclick = () => window.open(`https://github.com/${username}`, '_blank');

    // Tooltip
    container.title = `Visit ${username}'s GitHub profile`;
}

// ✅ Example usage
// Replace 'Ishita95-harvad' with your GitHub username
document.addEventListener('DOMContentLoaded', () => {
    createGitHubProfileCircle('Ishita95-harvad', 200, 'profile-circle');
});
