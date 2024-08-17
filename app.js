AOS.init({
    duration: 1000, // Animation duration
    offset: 100,    // Offset from the element
});

function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}