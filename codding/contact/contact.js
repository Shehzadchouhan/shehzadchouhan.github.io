// Initialize EmailJS with your public key
emailjs.init("lReIwE6OjDFyj-zlP");

// Add event listener to your form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Create FormData object from the form
  const formData = new FormData(this);
  
  // Add dynamic time field
  formData.append("time", new Date().toLocaleString()); // Adding the time when the message is sent
  
  // Send the form data via EmailJS
  emailjs.sendForm("service_8dqwecs", "template_znkyk1e", formData)
    .then(function () {
      alert("Message sent!");
    }, function (error) {
      console.error("FAILED...", error);
    });
});
