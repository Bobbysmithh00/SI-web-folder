const winUrl="http://127.0.0.1:5500"
const apiUrl="http://localhost:3000"



const userID=localStorage.getItem('AWByNAZAUserID')

var nav=document.getElementsByClassName("nav_ul_links")[0]
if(userID){
   nav.innerHTML=`
   <a href="${winUrl}/user/PayOut.html">
   <button>
   <img src="${winUrl}/assets/image/shopping-cart (1).png" alt="">
   </button>
   </a>
   <button onclick="logOut()">
   <img src="${winUrl}/assets/image/arrow-right.png" alt="">
   </button>
   `
}else{
    nav.innerHTML=`
    <a href="${winUrl}/logs/singup.html">
    <img src="${winUrl}/assets/image/user (1).png" alt="">
    </a>
    `
}

function logOut(){
    localStorage.removeItem("AWByNAZAUserID")
    window.location = window.location
}