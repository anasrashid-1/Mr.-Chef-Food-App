

// attach header.css file 
// add attach a script with following lines of code
// ---->
// import ans_navbar from "./importheader.js";
// let header = document.getElementById("header-container");
// header.innerHTML = ans_navbar();

// const hamburger = document.querySelector(".ans-hamburger");
// const navMenu = document.querySelector(".ans-nav-menu");

// hamburger.addEventListener("click", function () {
//     navMenu.classList.toggle("active")
//     hamburger.classList.toggle("active")
// })  < ------


function ans_navbar(){
    return ` <header id="ans-header">
    <nav class="ans-navbar">
        <!-- hamburger lines -->
        <div class="ans-hamburger">
            <span class="ans-bar"></span>
            <span class="ans-bar"></span>
            <span class="ans-bar"></span>
        </div>

        <!-- logo -->
        <a id="ans-logo-link" href="index.html"><img src="logo.svg" width="120" alt=""></a>
        <ul class="ans-nav-menu">
            
            <li class="ans-nav-item"><input type="text" placeholder="Search"><button>
                <img src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-0.png" width="20" alt="search" />
            </button></li>
            <li class="ans-nav-item"><h3><a href="#ans-menu">Menu</a></h3></li>
            <li class="ans-nav-item"><h3><a href="#ans-about-us-text">About Us</a></h3></li>
            <li class="ans-nav-item"><h3><a href="#ans-footer-container">Contact</a></h3></li>
        </ul>

        <!-- <div id="ans-header-right"> -->
            <!-- social images -->
            <div id="ans-social-logos">
                <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                    width="30" alt="Facebook Symbol" />
                <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
                    width="30" alt="logo ig, instagram new logo vector download" />
            </div>

            <!-- login and cart -->
            <div style="display: flex;" id="ans-login-cart-container">
                <div id="ans-login-btn-container" class="ans-golden-btn">
                <a href="../Login Signup Page/signin.html"><button id="ans-login-btn">Login</button></a>
                    
                </div>
                <div id="ans-login-cart-container">
                <a href="../../../poject_MyChef/poject_MyChef/cartPage.html"> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-trolley-images-pixabay-download-pictures-14.png"
                width="30" alt="shopping cart" /></a>
                   
                </div>
            </div>
        <!-- </div> -->

    </nav>
</header>`

}

export default ans_navbar;