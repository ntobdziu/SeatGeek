document.querySelector('.support-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Uzimanje vrednosti iz input polja
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Selektovanje divova za prikaz poruka o greškama
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    // Provera polja "Name"
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else {
        nameError.textContent = ""; // Resetovanje poruke
    }

    // Provera polja "Email"
    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = ""; // Resetovanje poruke
    }

    // Provera polja "Message"
    if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    } else {
        messageError.textContent = ""; // Resetovanje poruke
    }

    // Ako je validacija uspešna, preusmeravanje na thankyou.html
    if (isValid) {
        window.location.href = "thankyou.html";
    }
});

// Funkcija za validaciju emaila
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
