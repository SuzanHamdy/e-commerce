

let icon = document.querySelector(".icon");
let close = document.querySelector(".close");
let price = document.querySelectorAll(".span-price");
let listCart = document.querySelector(".listCart");
let badge =document.querySelector(".icon  #num")
let totalPrice = 0
let add = document.querySelectorAll(".add")
let welcome = document.querySelector("#welcome");
let nam = document.querySelector("#nam");
let body = document.querySelector("body");
let link =document.querySelector(".link");
let logout = document.querySelector(".logout");
if (localStorage.getItem("userName")) {
    link.remove();
    welcome.style.display ="block";
    logout.style.display ="block";
    icon.style.display ="block";
    nam.innerHTML = localStorage.getItem("userName");
} 
logout.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(() =>{
    window.location = "../index.html";
  } , 1000)
  
})
// //////////////////////////////////////
let allproducts = document.querySelector(".product")
let Arrproducts =[
{
    id :1 ,
    title :"Wireless Headphones" ,
    text :"Oraimo BoomBop 2S Wireless Over-Ear Noise-Canceling Headphones.",
    price :"$1300",
  img :"./images/1.jpg",
},
{
    id :2 ,
    title :"Three fishes" ,
    text :"Three fixtures with multiple inputs and dual outputs.",
    price :"$2000",
  img :"./images/2.jpg",
},
{
    id :3 ,
    title :"USB cable" ,
    text :"USB cable Features both data transfer and charging.",
    price :"$1300",
  img :"./images/3.jpg",
},
{
    id :4 ,
    title :"Wireless Bluetooth Mouse" ,
    text :"Rechargeable for MacBook Pro, Laptop and PC.",
    price :"$300",
  img :"./images/4.jpg",
},
{
    id :5 ,
    title :"Joystick Upgraded" ,
    text :"Easy Operation You can use your index finger to push, rotate, and aim.",
    price :"$7000",
  img :"./images/5.jpg",
},
{
    id :6 ,
    title :"GP310 power supply" ,
    text :"overload protection has a universal smart plug.",
    price :"$2000",
  img :"./images/6.jpg",
},
{
    id :7 ,
    title :"Ubi USB Security Key" ,
    text :"Security Key Fits into the USB Type-C port once registered.",
    price :"$1200",
  img :"./images/7.jpg",
},
{
    id :8 ,
    title :">Multifunctional Electric Treadmill" ,
    text :"It features a great screen with a powerful DC motor.",
    price :"$8800",
  img :"./images/8.jpg",
},
{
    id :9 ,
    title :"Transparent protective screen" ,
    text :"Edge-to-edge protection: With glass protective screen bezel.",
    price :"$5200",
  img :"./images/9.jpg",
},
{
    id :10 ,
    title :"USB 5.0 Bluetooth Adapter" ,
    text :" convenient connection between Bluetooth devices and PC.",
    price :"$7000",
  img :"./images/10.jpg",
},
{
    id :11 ,
    title :"Microsoft Surface Keyboard" ,
    text :"Choose your keyboard color: Poppy Red Platinum and Black.",
    price :"$500",
  img :"./images/11.jpg",
},
    {
        id :12 ,
        title :"Tablet Case" ,
        text :"High-quality Hollow polyester polyurethane waterproof shell.",
        price :"$2200",
      img :"./images/12.jpg",
    },
    {
        id :13 ,
        title :"MTV Stick Streamer" ,
        text :"Google Assistant, voice remote, media player, and Chrome.",
        price :"$3700",
      img :"./images/13.jpg",
    },
    
   
        {
            id :14 ,
            title :"Front Load Washer" ,
            text :"Load Washer SmartThings AI power mode technology.",
            price :"$7000",
          img :"./images/14.webp",
        },
        {
            id :15 ,
            title :"Microwave Oven" ,
            text :"Manufacture Warranty Included as per the Brand Warranty Policy.",
            price :"$2000",
          img :"./images/15.webp",
        },
        {
            id :16 ,
            title :"Refrigerator " ,
            text :"No Frost with two steel doors and a nano-technology.",
            price :"$3200",
          img :"./images/16.webp",
        },
        {
            id :17 ,
            title :"Beko Dishwasher" ,
            text :"programs 10 people Silver LED display Half Load.",
            price :"$4400",
          img :"./images/17.webp",
        },
        {
            id :18 ,
            title :" Airfryer Collection" ,
            text :"The healthy way to fry! Get the taste you love without the guilt.",
            price :"$3300",
          img :"./images/18.webp",
        },
        {
            id :19 ,
            title :"French coffee maker" ,
            text :"Very small, the Travel Press Handheld is the perfect French press.",
            price :"$5000",
          img :"./images/19.webp",
        },
        {
            id :20 ,
            title :"Sandwich Maker" ,
         text :"Opens flat for added grill functionality, and also comes with two oil drip trays",
         price :"$2400",
          img :"./images/20.webp",
        },
        {
            id :21 ,
            title :"Steam Rice Cooker" ,
            text :" Steam Rice Cooker Large 2.8 liter pot with Keep Warm feature.",
            price :"$4000",
          img :"./images/21.webp",
        },
        {
            id :22 ,
            title :"Deep Air Fryer" ,
            text :"Deep Air Fryer Temperature and time control.",
            price :"$1000",
          img :"./images/22.webp",
        },
        {
            id :23 ,
            title :"Black & White Rice Cooker" ,
            text :"Removable Aluminum Steamer.",
            price :"$4600",
          img :"./images/23.webp",
        },
        {
            id :24 ,
            title :"Turkish coffee maker" ,
            text :" Tornado is inspired by traditional Turkish coffee machines.",
            price :"$1700",
          img :"./images/24.webp"
        },
        {
            id :25 ,
            title :"Horizontal Range Hood" ,
            text :"90cm Stainless Steel Ring Horizontal Hood Scratch resistant.",
            price :"$6000",
          img :"./images/25.webp"
        },
        {
            id :26 ,
            title :"Bagless vacuum cleaner" ,
            text :"Vacuum container type: Bagless - versatile cyclonic.",
            price :"$2300",
          img :"./images/26.webp"
        },
        {
            id :27 ,
            title :"Vacuum cleaner" ,
            text :"HEPA Full Pickup Nozzle Full Curtain AC duct cleaning curtain.",
            price :"$5300",
          img :"./images/27.webp"
        },
        {
            id :28 ,
            title :"Blender" ,
            text :"Healthy smoothies, sauces and crushed ice, every day.",
            price :"$1500",
          img :"./images/28.jpg"
        },
      
];








function draw (){
    let data = Arrproducts.map((item )=>{
        return  `
        <div class="card  col-md-3 col-6 " style="width: 18rem;">
        <img src= "${item.img}" class="card-img-top" alt="product1">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.text}</p>
        <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div><br>
        <div class="price d-flex">
            <span class="span-price"class="span-price">${item.price}</span>
            <button   class="add" onclick= "addtocart(${item.id})"   ><i  class="fas fa-shopping-cart"></i> </button>
        </div>
        </div>
      </div>
        `
    })
    allproducts.innerHTML = data ;
}
draw()
let additem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) :[];
if (additem) {
  additem.map((item)=>{
    listCart.innerHTML+= `
    <div class="item">
              <div class="image">
                <img src= "${item.img}" alt="">
              </div>
              <div class="title">
              ${item.title}
              </div>
              <div class="total">
              ${item.price}
              </div>
              <div class="quantity" onclick= "removeItem(${item.id})" >
              <i class="fas fa-trash-alt"></i>
              </div>
             </div> 
  `;

  })
  let cartlength = document.querySelectorAll(".cart .listCart .item");
  badge.style.display="block";
  badge.innerHTML= cartlength.length;
  
}







if (localStorage.getItem("userName")) {
  function  addtocart(id){
    let choosen = Arrproducts.find((item)=> item.id===id );
  listCart.innerHTML+= `
    <div class="item">
              <div class="image">
                <img src= "${choosen.img}" alt="">
              </div>
              <div class="title">
              ${choosen.title}
              </div>
              <div class="total">
              ${choosen.price}
              </div>
              <div class="quantity">
                <i class="fas fa-trash-alt"></i>
              </div>
             </div> 
  `;
  additem =[...additem , choosen]
  localStorage.setItem("productsInCart" ,JSON.stringify(additem))
  let cartlength = document.querySelectorAll(".cart .listCart .item");
  badge.style.display="block";
  badge.innerHTML= cartlength.length;
  }
  
} 
function removeItem(){
  let item =document.querySelector(".item");

item.remove();
let cartlength = document.querySelectorAll(".cart .listCart .item");
badge.innerHTML= cartlength.length;
}


let span = document.querySelector(".arrow i");
window.onscroll = ()=>{
    if ( window.scrollY >=200 ) {
                span.style.display ='block';
       
                }
             else {
                span.style.display ='none';
            }
}
span.onclick =(e)=>{
e.preventDefault()
window.scrollTo(top ,0)
}
console.log(span)





///////////////////////////////////////////////////////////

// shopping cart
icon.addEventListener('click' , ()=>{
    body.classList.toggle("show-cart")
});
close.addEventListener('click' , ()=>{
    body.classList.toggle("show-cart")
})


























