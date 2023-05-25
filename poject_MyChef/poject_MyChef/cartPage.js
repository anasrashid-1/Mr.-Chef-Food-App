// import footer from './Components/importfooter.js'
import navbar from '../../Anas/Components/importheader.js'
let navbar1234 = document.getElementById('navbar1234')
navbar1234.innerHTML = navbar()

function data() {
    window.location.href = "payment_gateway.html"
}
// var cartProduct = JSON.parse(localStorage.getItem("cartItem")) || [];
var cartProduct = JSON.parse(localStorage.getItem("food-items")) || [];
console.log(cartProduct);
if (cartProduct.length > 0) {
    var cartArr = [];
    myCart();
    displayCart();
    cartTotal();
} else {
    var button = document.getElementById("button");
    inpButton.style.display = "none";
    var div1 = document.createElement("div");
    div1.setAttribute("id", "div1")
    var t = document.createElement("h1");
    t.textContent = "No Items in Cart"
    div1.append(t);
    document.querySelector("#parent").append(div1);
}

function myCart(){
    cartProduct.map(function(ele, index){
        var num = 1;
        var list = {
            image_url: ele.image_url,
            name: ele.name,
            num: 1,
            price: ele.price,
           
        }
        cartArr.push(list);
    });
    console.log(cartArr);
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
}

function displayCart() {
    document.getElementById("parent").innerHTML = ""
    cartArr.map(function (elem, index) {

        var image = document.createElement("img");
        image.setAttribute("src", "https://media.istockphoto.com/id/1444800538/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?b=1&s=170667a&w=0&k=20&c=fWiX2qENcpjbKrkEfBfGisnQ7VvQCxCIxMYrQyNW9i0=");
        // image.setAttribute("src", );
        // image.setAttribute("alt", elem.name);
        image.setAttribute("id", "productImage")

        var name = document.createElement("h4");
        name.textContent = elem.title;

        // qty btn start
        var qtydiv = document.createElement("div");
        qtydiv.setAttribute("class", "qtnButtons");

        var inc = document.createElement("button");
        inc.textContent = "+";
        inc.setAttribute("class", "round");
        inc.addEventListener("click", function () {
            increase(index);
        });

        var q = document.createElement("button");
        q.textContent = elem.num;
        // q.textContent = 5;
        q.setAttribute("id", "box4");

        var dec = document.createElement("button");
        dec.textContent = "-";
        dec.setAttribute("class", "round");
        dec.addEventListener("click", function () {
            decrease(index);
        });

        qtydiv.append(dec, q, inc);

        // qty button end

        var price = document.createElement("h3");
        var priceTotal =  (elem.num*elem.price);
        price.textContent ="₹ "+ priceTotal;
        console.log(elem.num);

        var del = document.createElement("img");
           del.src = "delete-100.png";
           del.setAttribute("id", "deletePng");
           del.addEventListener("click", function(){
            deleteRow(index);
        });

        var box = document.createElement("div");
        var div = document.createElement("div");
        div.setAttribute("id", "mainContainer");
        box.append(price);
        div.append(image, name, qtydiv, box, del)
        document.getElementById("parent").append(div);
        // cartTotal();
    });
}



// console.log(total);
function cartTotal() {
    var total = cartArr.reduce(function (acc, currelem) {
        return acc + +currelem.price;
    }, 0);
    var div = document.createElement("div");
    div.setAttribute("id", "cart");

    var p1 = document.createElement("p");
    p1.textContent = "Total Cart Value";

    var p2 = document.createElement("p");
    p2.textContent ="₹ " +total;

    div.append(p1, p2);
    document.querySelector("#parent").append(div);
    // displayCart();
}



function increase(index){
    cartArr[index].num++;
    displayCart();
    calculateTotal();
}

function decrease(index){
    cartArr[index].num--;
    if(cartArr[index].num == 0)
        deleteRow(index);
    
    displayCart();
    calculateTotal();
}

function calculateTotal(){
    var total1 = 0; var quan = 0;
    for(var i=0; i<cartArr.length; i++){
        total1 += cartArr[i].price*cartArr[i].num;
        quan += cartArr[i].num;
    }

    var div = document.createElement("div");
    div.setAttribute("id", "cart");

    var p1 = document.createElement("p");
    p1.textContent = "Total Cart Value";
    p1.setAttribute("class", "totalCartValue");

    var p2 = document.createElement("p");
    p2.textContent ="₹ " +total1;
    p2.setAttribute("class", "totalCartValue");

    div.append(p1, p2);
    document.querySelector("#parent").append(div);
}

function deleteRow(index){
    var res = cartArr.splice(index, 1);
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
    
    // var res1 = cartProduct.splice(index, 1);
    // localStorage.setItem("cartproducts", JSON.stringify(cart));
    displayCart();
    calculateTotal();
}

inpButton.addEventListener("click", () =>{
    window.location.href = "./paymentpage/paymet.html"
})

// let footer1 = document.getElementById('ans-main-footer-container')
// footer1.innerHTML = footer()
