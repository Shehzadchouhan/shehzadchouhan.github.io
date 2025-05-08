<script>
  const typingText = document.querySelector(".typing-text");
  const texts = ["a Developer", "a Future Engineer", "a Video Editor", "a Creative Thinker"];
  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    currentText = texts[index];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex--);
    } else {
      typingText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 60 : 120);
    }
  }

  document.addEventListener("DOMContentLoaded", type);
</script>
