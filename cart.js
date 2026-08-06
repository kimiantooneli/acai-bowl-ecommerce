// ======================================
// CART PAGE SYSTEM
// ======================================


let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");



function displayCart(){


    if(!cartItems) return;


    cartItems.innerHTML = "";


    let total = 0;



    if(cart.length === 0){


        cartItems.innerHTML = `

        <p>
        Keranjang masih kosong 🛒
        </p>

        `;


        totalPrice.innerText = "Total: Rp0";

        return;

    }



    cart.forEach((item,index)=>{


        let priceNumber = Number(

            item.price
            .replace(/[^0-9]/g,'')

        );


        total += priceNumber;



        cartItems.innerHTML += `

        <div class="cart-item">


            <div>

                <h3>${item.name}</h3>

                <p>${item.price}</p>

            </div>


            <button onclick="removeItem(${index})">

                <i class="ri-delete-bin-line"></i>

            </button>


        </div>

        `;


    });



    totalPrice.innerText = 

    "Total: Rp" + total.toLocaleString("id-ID");


}



function removeItem(index){


    cart.splice(index,1);


    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );


    displayCart();


}



displayCart();
