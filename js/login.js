
let userName = document.querySelector("#userName");
let password =document.querySelector("#password");
let login =document.querySelector("#log");
let showPassword = document.querySelector(".showPassword");


let getuserName = localStorage.getItem("userName");
let getpassword = localStorage.getItem("password");


login.addEventListener("click" , (e)=>{
    e.preventDefault()
    if (userName.value==="" || password.value==="" ) {
     alert(" You must full data")
    } else {
if (getuserName &&getuserName.trim() === userName.value.trim() && getpassword && getpassword.trim() === password.value.trim() ) {
    setTimeout(()=>{
        window.location ="../index.html"
    } , 1000);

} else{
    alert(" user name or password is false")
}
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