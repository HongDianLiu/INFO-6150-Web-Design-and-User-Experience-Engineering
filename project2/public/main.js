"use strict";
(function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.primary-nav ul');
    const modal = document.getElementById('subscribe-modal');
    const subscribeButtons = document.querySelectorAll('.subscribe-link');
    const cancelBtn = document.getElementById('cancel-btn');
    const form = document.getElementById('subscribe-form');
    const emailField = document.getElementById('email');
    const confirmEmailField = document.getElementById('confirm-email');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    function showError(field, message) {
        let errorElement = field.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-message');
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        errorElement.textContent = message;
        field.classList.add('error');
    }

    function clearError(field) {
        const errorElement = field.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = '';
        }
        field.classList.remove('error');
    }

    function clearAllErrors() {
        clearError(emailField);
        clearError(confirmEmailField);
    }

    subscribeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
            emailField.focus();
        });
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        clearAllErrors();
        form.reset();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            clearAllErrors();
            form.reset();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        const email = emailField.value.trim();
        const confirmEmail = confirmEmailField.value.trim();
    
        if (!email.includes('@')) {
            showError(emailField, 'This field must be a valid email address including an @');
            valid = false;
        } else {
            clearError(emailField);
        }
    
        if (confirmEmail !== email) {
            showError(confirmEmailField, 'Email addresses must match');
            valid = false;
        } else {
            clearError(confirmEmailField);
        }
    
        if (valid) {
            form.action = '/subscribe'; 
            form.method = 'POST';
            form.submit();
        }
    });
})();