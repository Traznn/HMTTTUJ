document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 50,
            delay: 100,
        });
    }

    // Initialize Bootstrap carousel
    var eventCarousel = document.getElementById('eventCarousel');
    if (eventCarousel) {
        new bootstrap.Carousel(eventCarousel, {
            interval: 5000,
            wrap: true,
            touch: true,
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }

        // Close navbar on mobile after link click
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// Close navbar when clicking outside
document.addEventListener('click', function (e) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (
        !navbarCollapse.contains(e.target) &&
        !navbarToggler.contains(e.target) &&
        navbarCollapse.classList.contains('show')
    ) {
        navbarCollapse.classList.remove('show');
    }
});

// Toggle navbar visibility
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
});
