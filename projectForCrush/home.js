function checkSession() {
    fetch('php/check_session.php', {
        credentials: 'include' // Important para isama ang cookies
    })
    .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
    })
    .then(data => {
        if (!data.loggedin) {
            window.location.href = 'index.html';
        } else {
            document.getElementById('welcomeMessage').textContent = 
            `Welcome, ${data.username || 'User'}!`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        window.location.href = 'index.html';
    });
}

// I-check ang session pagka-load ng page
document.addEventListener('DOMContentLoaded', checkSession);
        
// I-check din ang session every 60 seconds
setInterval(checkSession, 60000);

// Logout function
function logout() {
    fetch('php/logout.php', {
        credentials: 'include'
    })
    .then(() => {
        window.location.href = 'index.html';
    });
}