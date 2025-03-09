const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navbarStyles = window.getComputedStyle(navbar);
const body = document.body;

const droplink = document.querySelector("#nav-droplink");
const dropdown = document.querySelector("#nav-dropdown");
const dropStyles = window.getComputedStyle(dropdown);

let click = 0;

// Stop transitions from running when browser is resized
let resizeTimer = null;
window.addEventListener("resize", () => {
  document.body.classList.add("stop-transition");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("stop-transition");
  }, 100);
})

document.addEventListener("click", () => { 
if(dropdown.classList.contains('visible') && document.activeElement !== droplink) {
  dropdown.classList.toggle('visible')
  dropdown.classList.remove('height')
}
})

droplink.addEventListener("click", () => {
  if (navbarStyles.getPropertyValue('position') === 'fixed') {
    if (dropStyles.getPropertyValue('height') == '0px'){
      dropdown.classList.toggle('visible')
      dropdown.classList.toggle('height')
      
    }else {
      dropdown.classList.toggle('height')
      dropdown.classList.toggle('visible')
    }
  } else {
    dropdown.classList.toggle('visible')
  }
})

hamburger.addEventListener("click", () => {
  if (click === 0){
    
    hamburger.classList.toggle('active');
    navbar.style.right = 0;
    navbar.style.visibility = 'visible';
    body.classList.add("scroll-stop");
    click = 1;
    
  }
  else {
    navbar.style.right = '-100%';
    navbar.style.visibility = null;
    hamburger.classList.toggle('active');
    body.classList.remove("scroll-stop");
    click = 0;
  
  if (dropStyles.getPropertyValue('height') !== '0px'){
    dropdown.style.height = null;
    dropdown.style.opacity = null;
  }
}
  
})