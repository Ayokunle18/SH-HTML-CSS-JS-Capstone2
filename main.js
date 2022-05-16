const button = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobileMenu");
const nav = document.querySelector("nav");
const image = document.querySelector("img");
const eye = document.querySelector(".eye");
const pass = document.querySelector("#passwordBox");
const eye1 = document.querySelector(".eye1");
const passC = document.querySelector("#passwordBoxC");
const form = document.querySelector("form");
const small = document.querySelector("small");


// Hamburger nav
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

// Hide and show passwords
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

// check passwords
// function checkLength(input, min, max) {
//     if (input.value.length < min) {
//       showError(
//         input,
//         `${getFieldName(input)} must be at least ${min} characters`
//       );
//     } else if (input.value.length > max) {
//       showError(
//         input,
//         `${getFieldName(input)} must be less than ${max} characters`
//       );
//     } else {
//       showSuccess(input);
//     }
//   }

//   function showError(input, message) {
//     const formControl = input.parentElement;
//     // formControl.className = "form-control error";
//     const small = formControl.querySelector("small");
//     small.innerText = message;
//   }

//   check password
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
     small.textContent= "Passwords do not match";
    }
    else{
        small.textContent= ""; 
    }
  }

//   submit button
form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // checkRequired([username, email, password, password2]);
    // checkLength(username, 3, 15);
    // checkLength(password, 6, 25);
    // checkEmail(email);
    checkPasswordsMatch(pass, passC);
  });
