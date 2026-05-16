/* =========================================================
FILE: script.js
========================================================= */

// Loader

window.addEventListener("load",()=>{

  const loader=document.querySelector(".loader");

  setTimeout(()=>{

    loader.style.opacity="0";

    setTimeout(()=>{
      loader.style.display="none";
    },500);

  },1000);

});

// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

  navLinks.classList.toggle("active");

});

// Close Mobile Menu

document.querySelectorAll(".nav-links a").forEach(link=>{

  link.addEventListener("click",()=>{

    navLinks.classList.remove("active");

  });

});

// Header Scroll

window.addEventListener("scroll",()=>{

  const header=document.querySelector(".header");

  if(window.scrollY>50){

    header.style.background="rgba(11,16,32,.95)";
    header.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

  }else{

    header.style.background="rgba(11,16,32,.8)";
    header.style.boxShadow="none";

  }

});

// Contact Form

const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const button=form.querySelector("button");

  button.innerHTML="Sending...";

  setTimeout(()=>{

    button.innerHTML="Message Sent ✔️";

    form.reset();

    setTimeout(()=>{

      button.innerHTML="Send Message";

    },2000);

  },1500);

});