// Common JavaScript code for all pages
document.addEventListener('DOMContentLoaded', () => {
    console.log('MetroGo frontend loaded');

    // Logout button click handler
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Redirect to login.html
            window.location.href = 'login.html';
        });
    }
});
