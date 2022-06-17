let productdata = [
    {
        avatar:
            "https://images.bewakoof.com/t320/killmonger-half-sleeve-t-shirt-509349-1655101044-1.jpg",
        brand: "Bewakoof",
        name: " Black Killmonger Graphic Printed T-shirt",
        position: "₹299",
        product_id: 1,

    },
    {
        avatar:
            "https://images.bewakoof.com/t320/killmonger-oversized-fit-t-shirt-509357-1655101091-1.jpg",
        brand: "Bewakoof",
        name: " Olive Killmonger Graphic Printed Oversized T-shirt",
        position: "₹499",
        product_id: 2,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/time-flies-oversized-fit-t-shirt-509134-1654873540-1.jpg",
        brand: "Bewakoof",
        name: " White Time Flies Graphic Printed Oversized T-shirt",
        position: "₹499",
        product_id: 3,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/the-dark-side-oversized-fit-t-shirt-509130-1654873148-1.jpg",
        brand: "Bewakoof",
        name: " White The Dark Side Graphic Printed Oversized T-shirt",
        position: "₹499",
        product_id: 4,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/throne-of-dragon-oversized-fit-t-shirt-503831-1653666298-1.jpg",
        brand: "Bewakoof",
        name: " Black House of The Dragon Graphic Printed Oversized Fit T-shirt",
        position: "₹449",
        product_id: 5,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/men-s-black-t-shirt-106-1651248172-1.jpg",
        brand: "Bewakoof",
        name: " Black T-shirt",
        position: "₹349",
        product_id: 6,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/white-half-sleeve-t-shirt-105-1653031889-1.jpg",
        brand: "Bewakoof",
        name: "White Half Sleeve T-Shirt",
        position: "₹349",
        product_id: 7,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/anonymous-mask-half-sleeve-t-shirt-232416-1637996098-1.jpg",
        brand: "Bewakoof",
        name: " Black Anonymous Mask T-shirt",
        position: "₹499",
        product_id: 8,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/blue-vibes-half-sleeve-t-shirt-black-298517-1637995543-1.jpg",
        brand: "Bewakoof",
        name: "Blue Vibes Half Sleeve T-Shirt Black",
        position: "₹349",
        product_id: 9,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/the-traveller-full-sleeve-t-shirt-276528-1638212427-1.jpg",
        brand: "Bewakoof",
        name: "The Traveller Full Sleeve T-Shirt",
        position: "₹399",
        product_id: 10,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/marvel-s-moon-knight-half-sleeve-t-shirt-483814-1648618777-1.jpg",
        brand: "Bewakoof",
        name: " Blue Marvel Moon Knight Graphic Printed T-shirt",
        position: "₹449",
        product_id: 11,

    },
    {
        avatar:
            "https://images.bewakoof.com/t540/men-s-green-yeh-dil-maange-more-t-shirt-391624-1649687881-1.jpg",
        brand: "Bewakoof",
        name: " Green Yeh Dil Maange More T-shirt",
        position: "₹275",
        product_id: 12,



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
