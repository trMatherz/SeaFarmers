// Ensure the page loads and checks user authentication
document.addEventListener('DOMContentLoaded', () => {
    // Fetch user data from the backend
    fetch('http://localhost:3001/api/user', {
      credentials: 'include', // To include cookies/session info
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('User not authenticated');
        }
        return response.json();
      })
      .then(data => {
        // Once user data is fetched, display their username
        const usernameDiv = document.getElementById('username');
        usernameDiv.textContent = `Welcome, ${data.username}!`;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        const usernameDiv = document.getElementById('username');
        usernameDiv.textContent = 'User not authenticated or error occurred.';
      });
  });
  