// ======================================
// ACAI BOWL STORE
// MAIN JAVASCRIPT
// ======================================

console.log("Acai Bowl Store Loaded Successfully!");


// ======================================
// STICKY NAVBAR
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = 
        "0 8px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = 
        "0 5px 20px rgba(0,0,0,0.08)";

    }

});
// ======================================
// WISHLIST BUTTON
// ======================================

const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            button.innerHTML = 
            '<i class="ri-heart-fill"></i>';

        } else {

            button.innerHTML = 
            '<i class="ri-heart-line"></i>';

        }

    });

});
