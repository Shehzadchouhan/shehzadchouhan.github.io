const typingElement = document.getElementById("typing");
const roles = ["MERN Stack Developer", "Future Engineer", "Video Editor", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    typingElement.textContent = currentRole.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  } else {
    charIndex++;
    typingElement.textContent = currentRole.substring(0, charIndex);
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause after full text
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);

