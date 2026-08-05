// Tombol Beli
const buyButtons = document.querySelectorAll(".card button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("🎉 Produk berhasil ditambahkan ke keranjang!");
    });
});

// Tombol Order Now
const orderBtn = document.querySelector(".hero-text button");

orderBtn.addEventListener("click", () => {
    alert("Terima kasih! Silakan pilih menu favoritmu.");
});

// Tombol Promo
const promoBtn = document.querySelector(".promo button");

promoBtn.addEventListener("click", () => {
    alert("🎁 Selamat! Kamu mendapatkan diskon 20%.");
});

// Search sederhana
const searchInput = document.querySelector(".search input");

searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();
    const products = document.querySelectorAll(".card");

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();

        if (name.includes(keyword)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
