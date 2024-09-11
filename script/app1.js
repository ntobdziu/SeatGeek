document.querySelectorAll('.slider-prev').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.nextElementSibling;
        container.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.slider-next').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.previousElementSibling;
        container.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});

// Example JavaScript for form submission
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Logged in successfully!');
});

document.querySelector('.support-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Support request submitted!');
});

// Example JavaScript for the sell form submission
document.querySelector('.sell-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const ticketQuantity = document.getElementById('ticket-quantity').value;
    const ticketPrice = document.getElementById('ticket-price').value;
    
    alert(`You have listed ${ticketQuantity} tickets for ${eventName} on ${eventDate} at $${ticketPrice} each.`);
});
