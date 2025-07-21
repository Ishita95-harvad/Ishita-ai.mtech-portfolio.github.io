// Modern script to create a circular GitHub profile image in the #profile-circle div
document.addEventListener('DOMContentLoaded', function () {
  const username = 'Ishita95-haravd';
  const size = 200;
  const container = document.getElementById('profile-circle');
  if (!container) return;

  // Style the container as a circle
  Object.assign(container.style, {
    width: size + 'px',
    height: size + 'px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid #ddd',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    margin: '20px auto',
    display: 'block',
  });

  // Create and style the image
  const img = document.createElement('img');
  img.src = `https://github.com/${username}.png?size=${size}`;
  img.alt = `${username}'s GitHub profile picture`;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';

  // Add hover effect
  container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.05)';
  });
  container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)';
  });

  // Make the container clickable
  container.onclick = () => window.open(`https://github.com/${username}`, '_blank');
  container.title = `Visit ${username}'s GitHub profile`;

  // Insert the image
  container.innerHTML = '';
  container.appendChild(img);
});
