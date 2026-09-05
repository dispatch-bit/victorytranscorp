document.addEventListener('DOMContentLoaded', () => {
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
