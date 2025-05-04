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



document.addEventListener("mousemove", function (e) {
    const profileImg = document.querySelector(".profile_pic");
    const moveX = (e.clientX - window.innerWidth / 2) / 50;
    const moveY = (e.clientY - window.innerHeight / 2) / 50;
    
    profileImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});



document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: ["Passionate Web Developer | Tech Enthusiast.."],
        typeSpeed: 70, // Speed of typing
        backSpeed: 60, // Speed of erasing
        backDelay: 1000, // Delay before erasing
        loop: true // Repeat animation infinitely
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".reveal");
    
    function revealSections() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", revealSections);
    revealSections();
});
