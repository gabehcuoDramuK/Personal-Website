document.addEventListener('DOMContentLoaded', function() {
    const roles = ['Trader', 'Creative Coder', 'Foodie'];
    const rotatingText = document.querySelector('.rotating-text');
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;

    // Set initial text
    rotatingText.textContent = '';

    function type() {
        const currentRole = roles[currentIndex];
        
        if (isDeleting) {
            // Deleting effect
            currentText = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing effect
            currentText = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        rotatingText.textContent = currentText;

        let typingSpeed = isDeleting ? 25 : 50; // Much faster typing and deletion

        if (!isDeleting && charIndex === currentRole.length) {
            // Finished typing
            typingSpeed = 1000; // Shorter pause at the end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting
            isDeleting = false;
            currentIndex = (currentIndex + 1) % roles.length;
            typingSpeed = 200; // Shorter pause before typing next word
        }

        setTimeout(type, typingSpeed);
    }

    // Start the animation
    setTimeout(type, 1000);
});