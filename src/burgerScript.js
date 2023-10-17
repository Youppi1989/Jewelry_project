document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const headerMenu = document.querySelector('.header__menu');
  
    if (burgerIcon && headerMenu) {
      burgerIcon.addEventListener('click', () => {
        headerMenu.classList.toggle('open');
      });
  
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1180) {
          headerMenu.classList.remove('open');
        }
      });
    } else {
      console.error('Elements with specified classes not found.');
    }
  });
  
