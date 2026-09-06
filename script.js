document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isOpen));
            navLinks.classList.toggle('is-open', !isOpen);
        });
    }

    const form = document.querySelector('[data-contact-form]');

    if (!form) {
        return;
    }

    const status = form.querySelector('.form-status');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', () => {
        if (!submitButton || !status) {
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        status.textContent = 'Sending your message...';
    });
});
