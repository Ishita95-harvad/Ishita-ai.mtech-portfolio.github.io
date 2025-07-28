<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Profile Circle</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <!-- Container where the GitHub profile picture will appear -->
    <div id="github-profile"></div>

    <!-- Link to your JavaScript file -->
    <script src="github-profile-circle.js"></script>
    
    <!-- Call the function with your GitHub username -->
    <script>
        createGitHubProfileCircle('<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Profile Circle</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <!-- Container where the GitHub profile picture will appear -->
    <div id="github-profile"></div>

    <!-- Link to your JavaScript file -->
    <script src="github-profile-circle.js"></script>
    
    <!-- Call the function with your GitHub username -->
    <script>
        createGitHubProfileCircle('Ishita95-harvad');
    </script>
</body>
</html>');
    </script>
</body>
</html>
        // Function to create a circular GitHub profile picture
function createGitHubProfileCircle(Ishita95-harvad, size = 200, elementId = 'Ishita95-harvad') {
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
    img.src = `https://github.com/${Ishita95-harvad}.png?size=${size}`;
    img.alt = `${Ishita95-harvad}'s GitHub profile picture`;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    
    // Clear previous content and add the image
    container.innerHTML = '';
    container.appendChild(img);


    // Make the image clickable (links to GitHub profile)
    container.onclick = () => {
        window.open(`https://github.com/${IShita95-harvad}`, '_blank');
    };

    // Optional: Add tooltip
    container.title = `Visit ${Ishita95-haravd}'s GitHub profile`;
}


// create GitHub ProfileCircle('Ishita95-harvad', 200, 'profile-container');    <!-- Add this where you want the circular GitHub profile picture -->
<div id="profile-circle"></div>
-----------------
createGitHubProfileCircle('Ishita95-harvad');
createGitHubProfileCircle('Ishita95-harvad', 150);
createGitHubProfileCircle('Ishita95-harvad', 200, 'custom-container');

// github-profile-circle.js
function createGitHubProfileCircle(Ishita95-harvad, size = 200, elementId = 'github-profile') {
    // Create container div if it doesn't exist
    let container = document.getElementById(elementId);
    if (!container) {
        container = document.createElement('div');
        container.id = elementId;
        document.body.appendChild(container);
    }

 
    // Clear previous content and add the image
    container.innerHTML = '';
    container.appendChild(img);
    
    // Make the image clickable (links to GitHub profile)
    container.onclick = () => {
        window.open(`https://github.com/${Ishita95-harvad}`, '_blank');
    };

    // Optional: Add tooltip
    container.title = `Visit ${Ishita95-harvad}'s GitHub profile`;
}
// Function to create a circular GitHub profile picture inside a target container
function createGitHubProfileCircle(Ishita95-harvad, size = 200, elementId = 'profile-circle') {
    const container = document.getElementById(elementId);





// Run when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createGitHubProfileCircle('Ishita95-harvad', 200, 'profile-circle');
});
