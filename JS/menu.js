var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('.sideBar__menuToggle');
var menuToggleSVGOnHover = document.querySelector('.sideBar__menuToggle:hover svg');
var menuToggleSVG = document.querySelector('.sideBar__menuToggleSVG');
var menuToggleIcon = document.querySelector('.sideBar__menuToggleComponent');
var menuToggleIcon2 = document.querySelectorAll('.sideBar__menuToggleComponent')[1];

var menuChecker = document.querySelector('#sideBar__menuCheckbox');

menuChecker.addEventListener('click', function () {
  if (this.checked) {
    menu.classList.add('menu--in');
    menuToggle.classList.add('switchBackground');
    // menuToggleIcon.classList.add('changeFilltoSecondary');
    menuToggleIcon.classList.add('changeFilltoSecondary');
    menuToggleIcon2.classList.add('changeFilltoSecondary');
    // menuToggle.classList.add('noMoveOnHover');
    // menuToggleSVG.style.transform.rotate = '45deg';
    menuToggleSVG.classList.add('makeX');
    // document.querySelector('.header').style.opacity = '0';
    // document.querySelector('.header').style.transition = 'all 300ms ease-in-out';


  }

  else {
    menu.classList.remove('menu--in');
    menuToggle.classList.remove('switchBackground');
    menuToggleIcon.classList.remove('changeFilltoSecondary');
    menuToggleIcon.classList.remove('changeFilltoSecondary');
    menuToggleIcon2.classList.remove('changeFilltoSecondary');
    menuToggle.classList.remove('noMoveOnHover');
    menu.style.transition = 'all 1s ease-in-out';
    menuToggleSVG.classList.remove('makeX');
    menuToggleSVG.style.transition = 'all 400ms ease-in-out'
    // document.querySelector('.header').style.opacity = '1';
  }
})

// menuToggle.addEventListener("click", function () {
//   // alert('clicked');
//   menu.classList.add('menu--in');




//   menuToggleSVG.classList.add('makeX');
//   menuToggle.classList.add('switchBackground');
//   menuToggleIcon.classList.add('changeFilltoSecondary');
//   menuToggleIcon.classList.add('changeFilltoSecondary');
//   menuToggleIcon2.classList.add('changeFilltoSecondary');
//   // menuToggle.classList.remove('sideBar__menuToggleComponent__dark');
//   menuToggle.classList.add('noMoveOnHover');
//   // menuToggleSVGOnHover.classList.add('noMoveOnHover');
//   // menuToggle.style.left = '-3000px';
//   // menuToggle.style.transform.rotat

//   // menu.classList.add('menu--out');
// })

// function closeMenu() {

// }



// var activeMenu = document.querySelector('.menu--in');
// var menu = document.querySelector('.menu');

// menuToggle.addEventListener("click", function () {
//   menu.classList.add('menu--out');
//   menu.style.left = '-3000px';

// })

var mobileMenuToggle = document.querySelector('.mainColumn__menuToggle');
var mobileMenuToggleSVG = document.querySelector('.mainColumn__menuToggleSVG');
var mobileMenuToggleIcon = document.querySelector('.mainColumn__menuToggleComponent');
var mobileMenuToggleIcon2 = document.querySelectorAll('.mainColumn__menuToggleComponent')[1];
var mobileMenuChecker = document.querySelector('#mainColumn__menuCheckbox');

mobileMenuChecker.addEventListener('click', function () {
  if (this.checked) {
    menu.classList.add('menu--in');
    // alert('checked');
    mobileMenuToggleSVG.classList.add('makeX');
    mobileMenuChecker.style.background = 'var(--primary-colour)';


  }
  else {
    menu.classList.remove('menu--in');
    mobileMenuToggleSVG.classList.remove('makeX');
    mobileMenuToggleSVG.style.transition = 'all ease-in-out 600ms';
    menu.style.transition = 'all ease-in-out 1000ms';

  }
})