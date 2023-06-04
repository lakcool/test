window.addEventListener('scroll', changeNavbarColor);
function changeNavbarColor() {
  const navbar = document.querySelector('.navbar');
  const scrolledClass = 'navbar-scrolled';
  
  if (window.scrollY > 0) {
    navbar.classList.add(scrolledClass);
  } else {
    navbar.classList.remove(scrolledClass);
  }
}

// Listen for the scroll event and call the function
window.addEventListener('scroll', changeNavbarColor);