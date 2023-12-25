// Carousel
let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
}

// Hover
document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const originalImage = container.querySelector('#original-image');
        const hoverImage = container.querySelector('#hover-image');

        container.addEventListener('mouseenter', function () {
            originalImage.src = hoverImage.src;
        });

        container.addEventListener('mouseleave', function () {
            originalImage.src = originalImage.dataset.originalSrc;
        });
    });
});

// Scroll
document.getElementById('about-us').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('footer-about-us').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-us').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('footer-contact-us').scrollIntoView({ behavior: 'smooth' });
});

// Modal container
const modal = document.getElementById('orderModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const orderDeliveryBtn = document.getElementById('orderDeliveryBtn');
const orderPickupBtn = document.getElementById('orderPickupBtn');

modal.style.display = 'block';

openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

orderDeliveryBtn.addEventListener('click', function () {
    alert('Order Delivery clicked!');
    modal.style.display = 'none';
});

orderPickupBtn.addEventListener('click', function () {
    alert('Order Pickup clicked!');
    modal.style.display = 'none';
});
