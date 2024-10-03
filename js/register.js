

// register
let userName = document.querySelector("#userName");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let password =document.querySelector("#password");
let signUp =document.querySelector("#signUp");
let showPassword = document.querySelector(".showPassword");



signUp.addEventListener("click" , ()=>{
   if (userName.value=="" ||phone.value==""|| email.value==""|| password.value=="" ) {
    alert(" You must full data")
   } else {
    window.localStorage.setItem("userName" , userName.value);
    window.localStorage.setItem("phone" , phone.value);
    window.localStorage.setItem("email" , email.value);
    window.localStorage.setItem("password" , password.value);
    setTimeout(()=>{
        window.location ="../login.html"
    } , 1000)
   }
})


showPassword.addEventListener('click' , ()=>{
   if (password.type==="password") {
    password.type="text";
    showPassword.textContent="hide password";
   } else {
    password.type="password";
     showPassword.textContent="show password";
   }  
})


