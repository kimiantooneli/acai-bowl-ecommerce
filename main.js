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
// ======================================
// ADD TO CART
// ======================================

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        let product = button.closest(".product-card");

        let productName = product.querySelector("h3").innerText;


        alert(
            productName + " berhasil ditambahkan ke keranjang 🛒"
        );

    });

});
// ======================================
// FAQ ACCORDION
// ======================================

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");


    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
// ======================================
// MOBILE MENU
// ======================================

const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector("nav ul");

if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

    });

                                              }
/* SEARCH BOX */

.search-box{
    text-align:center;
    margin-bottom:40px;
}

.search-box input{

    width:350px;
    max-width:90%;

    padding:15px 20px;

    border-radius:50px;

    border:2px solid #eadcff;

    font-size:15px;

                            }
// ======================================
// SEARCH PRODUCT
// ======================================

const searchBox = document.getElementById("search-box");

const products = document.querySelectorAll(".product-card");


if(searchBox){

    searchBox.addEventListener("keyup",()=>{

        let keyword = searchBox.value.toLowerCase();


        products.forEach(product=>{

            let name = product
            .querySelector("h3")
            .innerText
            .toLowerCase();


            if(name.includes(keyword)){

                product.style.display="block";

            }else{

                product.style.display="none";

            }

        });

    });

        }
/* =========================================
   BACK TO TOP
========================================= */

#backTop{

    position:fixed;

    bottom:30px;
    right:30px;

    width:50px;
    height:50px;

    border-radius:50%;

    background:var(--primary);
    color:white;

    display:none;

    justify-content:center;
    align-items:center;

    font-size:22px;

    box-shadow:var(--shadow);

    z-index:999;

    transition:.3s;

}


#backTop:hover{

    background:var(--secondary);

    transform:translateY(-5px);

    }
// ======================================
// BACK TO TOP
// ======================================

const backTop = document.getElementById("backTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        backTop.style.display="flex";

    }else{

        backTop.style.display="none";

    }


});


if(backTop){

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

        }
/* =========================================
   SCROLL ANIMATION
========================================= */

.product-card,
.category-card,
.feature-box,
.testimonial-card{

    opacity:0;

    transform:translateY(40px);

    transition:.6s ease;

}


.show{

    opacity:1 !important;

    transform:translateY(0) !important;

}
// ======================================
// SCROLL ANIMATION
// ======================================

const animateItems = document.querySelectorAll(
    ".product-card, .category-card, .feature-box, .testimonial-card"
);


function scrollAnimation(){

    animateItems.forEach(item=>{

        const position = item.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 80){

            item.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    scrollAnimation
);


scrollAnimation();
/* =========================================
   CART COUNT
========================================= */

.cart-icon{

    position:relative;

    cursor:pointer;

}


#cart-count{

    position:absolute;

    top:-10px;

    right:-12px;

    width:20px;

    height:20px;

    background:var(--secondary);

    color:white;

    border-radius:50%;

    font-size:12px;

    display:flex;

    justify-content:center;

    align-items:center;

    font-weight:600;

}
