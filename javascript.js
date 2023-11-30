function searchProducts() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    filterProducts(input);
}

function filterCategory(category) {
    filterProducts('', category);
}

function filterProducts(searchTerm = '', category = 'all') {
    let productGallery = document.getElementById("productGallery");
    let products = productGallery.getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let title = products[i].dataset.name.toUpperCase();
        let prodCategory = products[i].dataset.category;

        if ((title.indexOf(searchTerm) > -1 || searchTerm === '') &&
            (category === 'all' || prodCategory === category)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
function redirectToBuyPage(productId) {
    // Here you can also add any logic needed before redirection
    window.location.href = 'Socialamedier.html'; // Redirect to the buy page
}
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.social-icon');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = 1;
            icon.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.social-icon');
    icons.forEach((icon, index) => {
        // Fade in each icon with a slight delay between each
        icon.style.opacity = 0; // Start with icon invisible
        setTimeout(() => {
            icon.style.opacity = 1; // Fade icon in to full visibility
            icon.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});
function filterProducts(searchTerm = '', category = 'all') {
    let products = document.getElementsByClassName('product');

    for (let product of products) {
        let title = product.dataset.name.toUpperCase();
        let prodCategory = product.dataset.category;

        if ((title.indexOf(searchTerm) > -1 || searchTerm === '') &&
            (category === 'all' || prodCategory === category)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    }
}
let loadedProducts = 0;
const productsPerLoad = 6; // Number of products to load each time

// Function to simulate loading more products
function loadMoreProducts() {
    // Load products logic goes here
    // For demonstration, we're simply incrementing the loadedProducts count
    loadedProducts += productsPerLoad;

    // Hide or show products based on loadedProducts
    let products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        if (index < loadedProducts) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadMoreProducts();
    }
});

// Initial load of products
document.addEventListener('DOMContentLoaded', loadMoreProducts);
