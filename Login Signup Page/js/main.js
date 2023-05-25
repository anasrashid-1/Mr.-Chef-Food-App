let formArray = JSON.parse(localStorage.getItem('formDetails')) || []

function FormDetails(name,email,password,repassword){
    this.name = name
    this.email = email
    this.password = password
    this.repassword = repassword
}

function submitForm(){
    event.preventDefault()
    let status = false
    let name = document.getElementById('name1221').value
    let email = document.getElementById('email1221').value
    let password = document.getElementById('pass1221').value
    let repassword = document.getElementById('re_pass1221').value
    // LocalStorage work done
    let formDetails = new FormDetails(name,email,password,repassword)
    formArray.push(formDetails)
    localStorage.setItem('formDetails',JSON.stringify(formArray))

    if(name == ""){
        alert("Please enter your name")
        status = false
    }
    else if(name.length < 3){
        alert("Minimum 3 characters required")
        status = false
    }
    else{
        status = true
    }
    // email validation
    if(email == ''){
        alert('Email-Id not valid')
        status = false
    }
    else{
        status = true
    }
    // password verification
    if(password == ''){
        alert("Password can't be empty")
        status = false
    }
    else{
        status = true
    }
    if(repassword != password){
        status = false
        alert("Your password dosen't match with your repeated password.")
    }
    else{
        status = true
    }
    let signupBtn = document.getElementById('signup1221')
    signupBtn.addEventListener('click',()=>{
        if(status == true){
            alert('Account Created Succesfully')
            redirectSignin()
        }
    })
    return status;
}

function redirectSignin(){
    window.location.href = 'signin.html'
}