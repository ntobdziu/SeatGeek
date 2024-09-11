// Placeholder for potential future functionality, e.g., purchase interaction or fetching from an API
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to payment gateway...');
    });
});

//   api cards
document.addEventListener("DOMContentLoaded", function () {
    // Lista ID-ova kartica (20 kartica)
    const cardIds = Array.from({ length: 20 }, (_, i) => `card${i + 1}`);

    async function fetchDataAndDisplay() {
        try {
            // Poziv API-ja koji vraća listu organizacija
            const response = await fetch('https://66e042132fb67ac16f28f521.mockapi.io/api/seat/seat');

            // Proveravamo da li je odgovor uspešan
            if (!response.ok) {
                throw new Error(`Greška sa API-jem, status: ${response.status}`);
            }

            // Parsiranje JSON podataka
            const data = await response.json();

            // Iteriramo kroz kartice i popunjavamo ih podacima
            cardIds.forEach((cardId, index) => {
                const cardElement = document.getElementById(cardId);

                // Provera da li imamo dovoljno podataka za kartice
                if (index < data.length) {
                    const org = data[index]; // Uzimamo organizaciju sa indeksom

                    // HTML sadržaj kartice (dodajemo API podatke, a ostavljamo dugme "Buy Now")
                    cardElement.innerHTML = `
                        <img src="${org.image}" alt="${org.name}" class="img-api" style="width:20rem; height:13rem; border-radius:5px;">
                        <h3>${org.name}</h3>
                        <p>Datum: ${org.date}</p>
                        <p>Cena: ${org.price}</p>
                        <a href="../pages/karta1.html"><button class="buy-now">Kupi odmah</button></a>
                    `;
                } else {
                    cardElement.innerHTML = `
                        <p class="error-text">Nema više organizacija za prikaz.</p>
                        <a href="../pages/karta.html"><button class="buy-now">Buy Now</button></a>
                    `;
                }
            });

            // Ponovno dodavanje event listenera na dugmad nakon učitavanja API podataka
            // document.querySelectorAll('.buy-now').forEach(button => {
            //     button.addEventListener('click', () => {
            //         alert('Redirecting to payment gateway...');
            //     });
            // });
        } catch (error) {
            console.error("Došlo je do greške:", error);
            // Prikaz greške za svaku karticu
            cardIds.forEach(cardId => {
                const cardElement = document.getElementById(cardId);
                cardElement.innerHTML = `
                    <p class="error-text">Greška prilikom učitavanja podataka: ${error.message}</p>
                    <a href="../pages/karta.html"><button class="buy-now">Buy Now</button></a>
                `;
            });
        }
    }

    // Poziv funkcije za prikaz podataka
    fetchDataAndDisplay();
});
