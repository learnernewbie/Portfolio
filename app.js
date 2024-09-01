// JavaScript for toggling the sidebar
function showsidebar() {
    document.querySelector('.sidebar').classList.add('active');  // Show the sidebar by adding a class
}

function hidesidebar() {
    document.querySelector('.sidebar').classList.remove('active');  // Hide the sidebar by removing a class
}

// Close sidebar if clicking outside of it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const mobileBar = document.querySelector('.mobile-bar');
    
    // Check if the sidebar is active and click was outside sidebar or menu button
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(event.target) && 
        !mobileBar.contains(event.target)) {
        hidesidebar();
    }
});

// Prevent click inside sidebar from closing it
document.querySelector('.sidebar').addEventListener('click', function(event) {
    event.stopPropagation();
});
