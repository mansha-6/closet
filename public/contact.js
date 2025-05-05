// script.js

// This is just an example of how you might handle form submission or button clicks
document.addEventListener("DOMContentLoaded", function() {
    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting
        alert("Form submitted successfully!");
    });
});
