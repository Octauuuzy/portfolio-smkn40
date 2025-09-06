document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = contactForm.querySelector('input[placeholder="Name"]');
            const thankYouMessage = document.createElement('p');
            thankYouMessage.textContent = 'Thank you for your message, ' + nameInput.value + '!';
            thankYouMessage.style.marginTop = '20px';
            thankYouMessage.style.fontWeight = 'bold';
            
            const existingMessage = document.querySelector('.thank-you-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            thankYouMessage.className = 'thank-you-message';
            
            contactForm.insertAdjacentElement('afterend', thankYouMessage);
            
            contactForm.reset();

            setTimeout(() => {
                thankYouMessage.remove();
            }, 5000);
        });
    }
});
