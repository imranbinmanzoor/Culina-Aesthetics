"use strict"

// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const menuLinks = mobileMenu.getElementsByTagName('a');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// --- Contact Form Submission ---
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Success!
            contactForm.classList.add('hidden'); // Hide the form
            successMessage.classList.remove('hidden'); // Show the thank you message
            contactForm.reset(); // Clear the form fields
        } else {
            // Error!
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            })
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});

// Custom Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-gold': '#C59D5F',
                'brand-dark': '#212529',
            }
        }
    }
}