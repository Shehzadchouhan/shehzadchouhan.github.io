// Add event listener to your form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Create FormData object from the form
    const formData = new FormData(form);

    // Add dynamic time field
    formData.append("time", new Date().toLocaleString());

    // Send the form data via EmailJS
    emailjs.sendForm("service_8dqwecs", "template_znkyk1e", form)
      .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
      }, function (error) {
        console.error("❌ FAILED...", error);
        alert("❌ Failed to send message. Try again.");
      });
  });
});
