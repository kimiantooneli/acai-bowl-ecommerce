// Tombol Order Now
document.querySelector(".hero-text button").onclick = function () {
    alert("Terima kasih telah memesan Acai Bowl!");
};

// Tombol Beli
document.querySelectorAll(".card button").forEach(function(btn){
    btn.onclick = function(){
        alert("Produk berhasil ditambahkan ke keranjang!");
    };
});

// Tombol Promo
document.querySelector(".promo button").onclick = function(){
    alert("Selamat! Kamu mendapat diskon 20%!");
};

// Ikon Favorit ❤️
document.querySelector(".fa-heart").onclick = function(){
    alert("Produk ditambahkan ke favorit ❤️");
};

// Ikon Keranjang 🛒
document.querySelector(".fa-cart-shopping").onclick = function(){
    alert("Keranjang belanja masih kosong 🛒");
};

// Ikon User 👤
document.querySelector(".fa-user").onclick = function(){
    alert("Halaman login akan segera hadir 👤");
};

// Search
document.querySelector(".search button").onclick = function(){

    let cari = document.querySelector(".search input").value;

    if(cari==""){
        alert("Silakan masukkan kata kunci.");
    }else{
        alert("Hasil pencarian: " + cari);
    }

};
