// import navbar from './Components/importheader.js'
import navbar from '../Anas/Components/importheader.js'
import footer from '../Anas/Components/importfooter.js'

let navbar1221 = document.getElementById('navbar1221')
navbar1221.innerHTML = navbar()

const hamburger = document.querySelector(".ans-hamburger");
const navMenu = document.querySelector(".ans-nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

let cardContainer = document.getElementById('cardContainer');

      async function getData() {
        try {
          let res = await fetch('http://localhost:3000/foods');
          let data = await res.json();
          displayData(data);
        } catch (err) {
          console.log("Error", err);
        }
      }

      getData();

      function displayData(data) {
        cardContainer.innerHTML = "";

        data.forEach((item) => {
          let cardCol = document.createElement('div');
          cardCol.setAttribute('class', 'col');
        //   cardCol.style.height = '24rem'

          let card = document.createElement('div');
          card.style.width = '18rem';
          card.setAttribute('class', 'card h-100 glass-card');
          // This will be used for sorting
          card.setAttribute('data-price',item.price)
          updateCardWidth(card)

          let img = document.createElement('img');
          img.setAttribute('class', 'card-img-top');
          img.setAttribute('src', item.img);

          let cardBody = document.createElement('div');
          cardBody.setAttribute('class', 'card-body');

          let h5 = document.createElement('h5');
          h5.setAttribute('class', 'card-title');
          h5.innerText = item.title;

          let p = document.createElement('p');
          p.setAttribute('class', 'card-text');
          p.innerText = item.description;

          let paraPrice = document.createElement('p');
          paraPrice.innerText = "₹" + item.price;

          cardBody.append(h5, p, paraPrice);

          let btn = document.createElement('button');
          btn.setAttribute('type', 'button');
          btn.setAttribute('class', 'btn btn-danger');
          btn.setAttribute('id', 'btn1221');
          btn.innerText = "Order Now";

          btn.addEventListener('click',()=>{
              storeData(item)
          })

          card.append(img, cardBody, btn);
          cardCol.append(card);
          cardContainer.append(cardCol);
        });
      }


let arr = JSON.parse(localStorage.getItem('food-items')) || [];
function storeData(item){
  arr.push(item)
  localStorage.setItem('food-items',JSON.stringify(arr))
}

// Sorting part
let sortLowHigh = document.getElementById('sortFrist1221')
sortLowHigh.addEventListener('click',()=>{
  sortLow()
})
async function sortLow(){
  let data  = await fetch('http://localhost:3000/foods?&_sort=price&_order=asc')
  let res = await data.json()
  displayData(res)
  console.log(res)
}
// Sorting high to low
let sortHighLow = document.getElementById('sortFrist12212')
sortHighLow.addEventListener('click',()=>{
  sortHigh()
})
async function sortHigh(){
  let data = await fetch('http://localhost:3000/foods?&_sort=price&_order=desc')
  let res = await data.json()
  displayData(res)
  console.log(res)
}

// Filter part

let filterPart = document.getElementById('filterbtn1221')
filterPart.addEventListener('change',filterFun)

async function filterFun(){
  let data = await fetch('http://localhost:3000/foods')
  let res = await data.json()
  console.log(res)

  let fillArr = res.filter((elm)=>{
    if(filterPart.value == elm.key){
      return elm
    }
    else if(filterPart.value == ""){
      return res
    }
  })
  displayData(fillArr)
}

// Search bar implementation
let searchBar = document.getElementById('inputSearch1221')
searchBar.addEventListener('input',searchImp)

async function searchImp(){
  let data = await fetch(`http://localhost:3000/foods?&q=${searchBar.value}`)
  let res = await data.json()
  displayData(res)
}

// Bottom to top functionality
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('resize', handleResize);

function handleResize() {
  // Call functions to adjust the layout or styles based on the window size
   updateCardWidth();
}
function updateCardWidth(card) {
  const windowWidth = window.innerWidth;
  const cardWidth = Math.min(windowWidth * 0.9, 300); // Adjust the percentage or fixed value as needed
  card.style.width = cardWidth + 'px';
}

let footer1221 = document.getElementById('footer1221')
footer1221.innerHTML = footer()

// for login
let user = localStorage.getItem("username")
let ans_login_btn = document.getElementById("ans-login-btn");
if(user){
    ans_login_btn.textContent = user;
} else{
    ans_login_btn.textContent = "Sign Up"
}
