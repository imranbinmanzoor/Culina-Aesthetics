"use strict"

// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const menuLinks = mobileMenu.getElementsByTagName('a');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

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