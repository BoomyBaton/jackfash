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
