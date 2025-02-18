const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navbarStyles = window.getComputedStyle(navbar);

const dropitem = document.querySelector("#nav-droplink");
const dropdown = document.querySelector("#nav-dropdown");
const dropStyles = window.getComputedStyle(dropdown);

let click = 0;

dropitem.addEventListener("click", checkdropdown)

hamburger.addEventListener("click", () => {
  if (click === 0){
    
    hamburger.classList.toggle('active');
    navbar.style.right = 0;
    click = 1;
    
  }
  else {
    navbar.style.right = '-100%';
    hamburger.classList.toggle('active');
    click = 0;
  
  if (dropStyles.getPropertyValue('height') !== '0px'){
    dropdown.style.height = null;
    dropdown.style.opacity = null;
  }
}
  
})

function checkdropdown() {
  if (navbarStyles.getPropertyValue('position') === 'fixed') {
    if (dropStyles.getPropertyValue('height') == '0px'){
      dropdown.style.opacity = "1";
      dropdown.style.height = "150px";
      dropdown.toggleAttribute('inert');
      
    }else {
      dropdown.style.height = null;
      dropdown.style.opacity = null;
      dropdown.toggleAttribute('inert');
    }
  }
}