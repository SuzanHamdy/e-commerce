let welcome = document.querySelector("#welcome");
let nam = document.querySelector("#nam");
let body = document.querySelector("body");
let link =document.querySelector(".link");
let logout = document.querySelector(".logout");
if (localStorage.getItem("userName")) {
    link.remove();
    welcome.style.display ="block";
    logout.style.display ="block";
    nam.innerHTML = localStorage.getItem("userName");
} 
logout.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(() =>{
    window.location = "../login.html";
  } , 1000)
  
})