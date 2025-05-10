document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("time", new Date().toLocaleString());

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
