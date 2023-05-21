// let formArray = JSON.parse(localStorage.getItem('formLogin')) || []
// function FormLogin(name){
//     this.name = name
// }
// function login(){
//     event.preventDefault()
//     let name = document.getElementById('your_name1221').value
//     let password = document.getElementById('your_pass1221').value
//     let status = false
//     if(name == ""){
//         alert("Please enter your name")
//         status = false
//     }
//     else if(name.length < 3){
//         alert("Minimum 3 characters required")
//         status = false
//     }
//     else{
//         status = true
//     }

//     if(password == ''){
//         alert('Please provide a correct password')
//         status = false
//     }
//     else{
//         status = true
//     }
//     let btn = document.getElementById('signin1221')
//     btn.addEventListener('click',()=>{
//         if(status == true){
//             alert('Login Succesful')
//             window.location.href = "../Anas/index.html"
//         }
//     })
// }



document.querySelector("#signin1221").addEventListener("click", getData);
  var userCredArr = JSON.parse(localStorage.getItem("formDetails")) || [];

  function getData() {
    event.preventDefault();
    var email = document.getElementById("your_name1221").value;
    var password = document.getElementById("your_pass1221").value;

    for (var i = 0; i < userCredArr.length; i++) {
      if (email === userCredArr[i].email && password === userCredArr[i].password) {
        localStorage.setItem("username", userCredArr[i].name);
        // window.location.href = "index.html";
        window.location.href = "../Anas/index.html"
        return;
      }
    }

    if (email === "" || password === "") {
      alert("Please Fill Your Details To Continue");
    } else {
      alert("Invalid credentials");
    }
  }