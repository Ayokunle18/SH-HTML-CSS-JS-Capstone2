const button = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobileMenu");
const nav = document.querySelector("nav");
const image = document.querySelector("img");
const eye = document.querySelector(".eye");
const pass = document.querySelector("#passwordBox");
const eye1 = document.querySelector(".eye1");
const passC = document.querySelector("#passwordBoxC");

// mobileMenu.style.backgroundColor= "yellow";

button.addEventListener('click' , ()=>{

    if(mobileMenu.getAttribute("id") === "1"){
    image.setAttribute("src" , "cancel1.png");
    mobileMenu.style.display ="block";
    mobileMenu.setAttribute("id", "2");
    }
    else if(mobileMenu.getAttribute("id") === "2"){
        image.setAttribute("src" , "icon-hamburger.svg");
       mobileMenu.style.display ="none";
        mobileMenu.setAttribute("id", "1");
    }
   
} 
    
);


eye.addEventListener('click' , (e)=>{
  e.preventDefault();


 if(pass.getAttribute("type") === "password"){
    pass.setAttribute("type", "text")
    }
    else if(pass.getAttribute("type") === "text"){
    pass.setAttribute("type", "password")
       
    }
   
} 
    
);

eye1.addEventListener('click' , (e)=>{
    e.preventDefault();
  
  
   if(passC.getAttribute("type") === "password"){
      passC.setAttribute("type", "text")
      }
      else if(passC.getAttribute("type") === "text"){
      passC.setAttribute("type", "password")
         
      }
     
  } 
      
  );



