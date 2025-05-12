document.addEventListener('DOMContentLoaded', function() {
    // Navbar background color change on scroll
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('navbar-scrolled');
            } else {
                header.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // Add animation to stats when they come into view
    const statItems = document.querySelectorAll('.stat-item h3');
    
    if (statItems.length > 0) {
        const animateStats = function() {
            statItems.forEach(item => {
                const position = item.getBoundingClientRect();
                
                // If the item is in the viewport
                if (position.top >= 0 && position.bottom <= window.innerHeight) {
                    item.classList.add('animate-stat');
                }
            });
        };
        
        // Run once on page load
        animateStats();
        
        // Run on scroll
        window.addEventListener('scroll', animateStats);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== "#") {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Form validation for the newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Success - would normally submit to server
                emailInput.value = '';
                
                // Show success message
                const formGroup = emailInput.closest('.input-group');
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-2';
                successMessage.textContent = 'Thank you for subscribing!';
                
                // Remove any existing messages
                const existingMessages = formGroup.parentNode.querySelectorAll('.alert');
                existingMessages.forEach(msg => msg.remove());
                
                formGroup.parentNode.appendChild(successMessage);
                
                // Remove the message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            } else {
                // Show error message
                const formGroup = emailInput.closest('.input-group');
                const errorMessage = document.createElement('div');
                errorMessage.className = 'alert alert-danger mt-2';
                errorMessage.textContent = 'Please enter a valid email address.';
                
                // Remove any existing messages
                const existingMessages = formGroup.parentNode.querySelectorAll('.alert');
                existingMessages.forEach(msg => msg.remove());
                
                formGroup.parentNode.appendChild(errorMessage);
            }
        });
    }
    
    // Email validation helper function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // Add class to navbar when menu is open on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            const header = document.querySelector('header');
            header.classList.toggle('menu-open');
        });
    }
}); 