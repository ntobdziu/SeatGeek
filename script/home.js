let currentScrollPosition = 0;
const container = document.querySelector('.categories-container');
const containerWidth = container.clientWidth;
const categoryWidth = 340; // Širina jedne kategorije (320px + padding)

function scrollNext() {
    const maxScroll = container.scrollWidth - containerWidth;
    if (currentScrollPosition < maxScroll) {
        currentScrollPosition += categoryWidth;
        if (currentScrollPosition > maxScroll) {
            currentScrollPosition = maxScroll;
        }
    } else {
        currentScrollPosition = 0; // Restartuj na početak
    }
    container.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
}

function scrollPrev() {
    if (currentScrollPosition > 0) {
        currentScrollPosition -= categoryWidth;
        if (currentScrollPosition < 0) {
            currentScrollPosition = 0;
        }
    }
    container.scrollTo({
        left: currentScrollPosition,
        behavior: 'smooth'
    });
}
