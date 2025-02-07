// Toggle sidebar visibility
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// Smooth scrolling and close sidebar when clicking a link
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Close sidebar after clicking a link (for mobile experience)
        document.querySelector(".sidebar").classList.remove("active");
    });
});

// Close sidebar when clicking outside
document.addEventListener("click", function (e) {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    // Close sidebar if clicking outside of it
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove("active");
    }
});
