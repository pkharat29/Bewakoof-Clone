let productdata = [
    {
        avatar:
        "https://images.bewakoof.com/t320/everyday-mood-boyfriend-t-shirt-509637-1655131674-1.jpg",
        brand: "Bewakoof",
        name: " Pink Everyday Mood Graphic Printed Oversized T-shirt",
        position: "₹499",
        product_id: 13,

    },
    {
        avatar:
        "https://images.bewakoof.com/t320/take-your-time-boyfriend-t-shirt-509351-1655101069-1.jpg",
        brand: "Bewakoof",
        name: "Black Take Your Time Graphic Printed Boyfriend T-shirt",
        position: "₹299",
        product_id: 14,

    },
    {
        avatar:
        "https://images.bewakoof.com/t320/everyday-mood-boyfriend-t-shirt-509634-1655131606-1.jpg",
        brand: "Bewakoof",
        name: " White Everyday Mood Graphic Printed Boyfriend T-shirt",
        position: "₹299",
        product_id: 15,

    },
    {
        avatar:"https://images.bewakoof.com/t320/women-s-pink-let-me-overthink-this-oversized-fit-t-shirt-498404-1652454634-1.jpg",
        brand: "Bewakoof",
        name: " Pink Let Me Overthink This Oversized Fit T-shirt",
        position: "₹599",
        product_id: 16,

    },
    {
        avatar:
        "https://images.bewakoof.com/t320/women-s-black-friends-typography-boyfriend-t-shirt-234669-1651240025-4.jpg",
        brand: "Bewakoof",
        name: "Black Friends Typography Boyfriend T-shirt",
        position: "₹275",
        product_id: 17,

    },
    {
        avatar:
        "https://images.bewakoof.com/t540/everyday-mood-short-top-509636-1655131628-1.jpg",
        brand: "Bewakoof",
        name: " Green Everyday Mood Graphic Printed Short Top",
        position: "₹349",
        product_id: 18,

    },
    {
        avatar:"https://images.bewakoof.com/t540/easy-peasy-lemon-squeezy-boyfriend-t-shirt-499263-1652767499-1.jpg",
        brand: "Bewakoof",
        name: "Pink Easy Peasy Lemon Squeezy Graphic Printed Boyfriend T-shirt",
        position: "₹349",
        product_id: 19,

    },
    {
        avatar:"https://images.bewakoof.com/t540/women-s-pink-relaxed-fit-t-shirt-480973-1654171690-1.jpg",
        brand: "Bewakoof",
        name: " Pink Relaxed Fit T-shirt",
        position: "₹399",
        product_id: 20,

    },
    {
        avatar:"https://images.bewakoof.com/t540/pocket-jerry-boyfriend-t-shirt-tjl-242000-1637855034-1.jpg",
        brand: "Bewakoof",
        name: " Red Pocket Jerry Boyfriend T-shirt",
        position: "₹349",
        product_id: 21,

    },
    {
        avatar:
        "https://images.bewakoof.com/t540/moody-boyfriend-t-shirt-white-329366-1638708653-1.jpg",
        brand: "Bewakoof",
        name: "White Moody Boyfriend T-shirt",
        position: "₹275",
        product_id: 22,

    },
    {
        avatar:
        "https://images.bewakoof.com/t540/peageant-blue-v-neck-striped-sleeves-t-shirt-330298-1635869736-1.jpg",
        brand: "Bewakoof",
        name: "  Blue V Neck Striped Sleeves T-Shirt",
        position: "₹499",
        product_id: 23,

    },
    {
        avatar:
        "https://images.bewakoof.com/t540/seashell-pink-women-plain-half-sleeves-t-shirt-316621-1638216940-1.jpg",
        brand: "Bewakoof",
        name: " Seashell Pink Women Plain Half Sleeves T-Shirt",
        position: "₹149",
        product_id: 24,



    },

];

let productsCont =document.getElementById("productcategory");
let filter = document.getElementById("filter");
var cartLS = JSON.parse(localStorage.getItem("cart-page")) || [];
//console.log(cartLS)

displayproduct(productdata)
function displayproduct(productdata) {
    productsCont.innerHTML = "";

    productdata.forEach(function (elem) {


        var box = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", elem.avatar);

        var brand = document.createElement("h2");
        brand.innerText = elem.brand;

        var name = document.createElement("p");
        name.innerText = elem.name;

        var price = document.createElement("h2");
        price.innerText = elem.position;

        var addTocart = document.createElement("button");
        addTocart.innerText = "Add to cart";
        addTocart.addEventListener("click", function () {
            if (addTocartFunc(elem.product_id) === true) {


                alert("Product added Succesfully");
                cartLS.push(elem)
                localStorage.setItem("cart-page", JSON.stringify(cartLS));
            }
            else {
                alert("Product Already in the Cart");

            }


        })

        box.append(img, brand, name, price, addTocart);

        productsCont.append(box)


    });
}

// add to cart code 
function addTocartFunc(id) {
    for (let i = 0; i < cartLS.length; i++) {
        if (cartLS[i].product_id == id) {
            return false;
        }
    }
    return true;
}



// fiter code starts here
function filtervalue() {
    var selected = document.querySelector("#filter").value;

    if (selected == "pasc") {
        productdata.sort(function (a, b) {
            return +(a.position.replace("₹", "")) - (+(b.position.replace("₹", "")));;
        });
        displayproduct(productdata);
    }

    if (selected == "pdsc") {
        productdata.sort(function (a, b) {
            return +(b.position.replace("₹", "")) - (+(a.position.replace("₹", "")));
        });
        displayproduct(productdata);
    }

    if (selected == "nasc") {
        productdata.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        displayproduct(productdata)


    }
    if (selected == "ndsc") {
        productdata.sort(function (a, b) {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        });
        displayproduct(productdata);


    }
}
