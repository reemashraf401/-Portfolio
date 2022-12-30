
var typed = new Typed(".auto-type",{
    strings : ['Reem Ashraf', "Web Designer"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  function lightmode(e){
    var element = document.body;
   element.classList.toggle("lightmode");
   var navv = document.getElementById("navbar");
   navv.classList.toggle("navbar-light");
   var navitems = document.getElementsByClassName("nav-link");
   for(var i=0;i<navitems.length;i++){
    navitems[i].classList.toggle("navitems-light")
   }
   document.getElementById("about").classList.toggle("about-light");
   document.getElementById("Services").classList.toggle("services-light");
   document.getElementById("portfolio").classList.toggle("protfolio-light");
   document.getElementById("contact").classList.toggle("contact-light");
   document.getElementById("Servicehead").classList.toggle("heaad");
   let txt = e.innerText;
   console.log(txt);
  e.innerText = txt == "OFF" ? "ON" : "OFF";
  }
 // Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    console.log(sectionId)
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active")
    }
  });
}

