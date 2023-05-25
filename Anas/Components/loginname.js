let user = localStorage.getItem("username")
    let ans_login_btn = document.getElementById("ans-login-btn");
    if(user){
        ans_login_btn.textContent = user;
    } else{
        ans_login_btn.textContent = "Sign Up"
    }