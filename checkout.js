// ======================================
// CHECKOUT SYSTEM
// ======================================


const checkoutForm = document.getElementById("checkout-form");


if(checkoutForm){


    checkoutForm.addEventListener("submit",(e)=>{


        e.preventDefault();


        let name = document.getElementById("customer-name").value;

        let address = document.getElementById("customer-address").value;

        let phone = document.getElementById("customer-phone").value;

        let payment = document.getElementById("payment").value;



        let cart = JSON.parse(

            localStorage.getItem("cart")

        ) || [];



        if(cart.length === 0){


            alert("Keranjang masih kosong 🛒");

            return;


        }



        let order = {

            name:name,

            address:address,

            phone:phone,

            payment:payment,

            items:cart

        };



        localStorage.setItem(

            "order",

            JSON.stringify(order)

        );



        localStorage.removeItem("cart");



        alert(
            "Pesanan berhasil dibuat! 🍓💜"
        );


        window.location.href="index.html";


    });


    }
