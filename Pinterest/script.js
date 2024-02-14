//  ek array hoga jismein objects honge aur har objects mein hoga kuchh data, ek image, ek name.

const products = [
    { name: "T-shirt", image: "https://images.unsplash.com/photo-1502389614483-e475fc34407e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 1999.99 },
    { name: "Sneakers", image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Footwear", price: 959.99 },
    { name: "Backpack", image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Accessories", price: 539.99 },
    { name: "Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 3229.99 },
    { name: "Watch", image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Accessories", price: 749.99 },
    { name: "Dress", image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=1555&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 849.99 },
    { name: "Headphones", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Electronics", price: 349999 },
    { name: "Sunglasses", image: "https://images.unsplash.com/photo-1612902457652-33aff0a641fa?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Accessories", price: 899.99 },
    { name: "Laptop", image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Electronics", price: 55499 },
    { name: "Skirt", image: "https://images.unsplash.com/photo-1613893251373-22925cf3c4c2?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 934.99 },

    { name: "T-shirt", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 1999.99 },
    { name: "Sneakers", image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Footwear", price: 959.99 },
    { name: "Backpack", image: "https://images.unsplash.com/photo-1549943872-f7ff0b2b51be?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Accessories", price: 539.99 },
    { name: "Jeans", image: "https://images.unsplash.com/photo-1677126748891-e5f59cfc992d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 3229.99 },
    { name: "Watch", image: "https://images.unsplash.com/photo-1526743655626-e3d757b13d61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Accessories", price: 749.99 },
    { name: "Dress", image: "https://images.unsplash.com/photo-1616348490852-d80c545b4f79?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 849.99 },
    { name: "Headphones", image: "https://images.unsplash.com/photo-1645191424225-102dfa9605bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Electronics", price: 349999 },
    { name: "Sunglasses", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Accessories", price: 899.99 },
    { name: "Laptop", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Electronics", price: 55499 },
    { name: "Skirt", image: "https://images.unsplash.com/photo-1603205319065-6ffbe8f0e5af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Clothing", price: 934.99 }
];


function showTheCards() {
    var clutter = ""
    products.forEach(function (prod) {
        clutter +=
            ` <div class="box">
         <img src="${prod.image}" alt="">
      <div class="caption"></div>
     </div>
     `
    })

    document.querySelector(".container").innerHTML = clutter;

}

function searchfnc() {
    var searchinput = document.querySelector("#searchinput");

    searchinput.addEventListener("click", function () {
        document.querySelector(".overlay")
            .style.display = "block";
    })
    searchinput.addEventListener("blur", function () {
        document.querySelector(".overlay")
            .style.display = "none";
    })

    searchinput.addEventListener("input", function () {
        const filteredArray = products.filter(obj => obj.name.toLowerCase().startsWith(searchinput.value));
        var clutter = "";

        filteredArray.forEach(function (obj) {
            clutter += `
                <div class="res flex px-8 py-3">
                    <i class="ri-search-line font-semibold mr-5"></i>
                    <h3 class="font-semibold">${obj.name}</h3>
                </div>
            `
        })
        

        searchinput.addEventListener("click", function () {
                searchdata.style.display = "block";
        })
        searchinput.addEventListener("blur", function () {
                searchdata.style.display = "none";
        })

        var searchdata = document.querySelector(".searchdata");

        searchdata.style.display = "block";
        searchdata.innerHTML = clutter;
        // document.querySelector(".searchdata").style.display = "block";
        // document.querySelector(".searchdata").innerHTML = clutter;

    });

}


searchfnc();
showTheCards();