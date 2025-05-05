document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  });
  