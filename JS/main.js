var primaryColour = ["#303030", "#60D9FF", "#FF7171", "#FFE660", "#1F09A8", "#FFD37C", "#FF949A", "#F64B4B", "#4B7BF6", "#3B41D3"];

var secondaryColour = ["#F9F9F9", "#6A54F3", "#3B41D3", "#F35E54", "#8AFFDC", "#1F2531", "#3835DC", "#303030", "#E3CDFF", "#F9F9F9"];

var colourSwapSpace = document.querySelector('.heroContent');

var i = 0;
var j = 0;

// document.querySelector(".heroContent").addEventListener("click", function () {
//   // i = i < primaryColour.length ? ++i : 0;
//   // i = i < secondaryColour.length ? ++i : 0;
//   i =;
// })

var a = Math.round(Math.random() * 6);

// alert(a);

colourSwapSpace.addEventListener("click", function () {
  // var k = i + 2;

  var a = Math.round(Math.random() * 9);

  // alert(a);

  document.documentElement.style.setProperty('--primary-colour', primaryColour[a]);
  document.documentElement.style.setProperty('--secondary-colour', secondaryColour[a]);

  return k;
})

// document.documentElement.style.setProperty('--primary-colour', primaryColour[i]);
// document.documentElement.style.setProperty('--secondary-colour', secondaryColour[i]);


// function setColourTheme() {
//   document.querySelector(".heroContent").addEventListener("click", function () {
//     i = i < primaryColour.length ? ++i : 0;
//     i = i < secondaryColour.length ? ++i : 0;
//   })

//   document.querySelector("body").style.background = secondaryColour[i];
// }

var colourInverter = document.querySelector('.header__invertColour');

function swap() {
  document.documentElement.style.setProperty('--primary-colour', '--secondary-colour');
  document.documentElement.style.setProperty('--secondary-colour', '--primary-colour');
}

// colourInverter.addEventListener("click", swap(event));

// function invertColours() {
//   colourInverter.addEventListener("click", function () {
//     document.documentElement.style.setProperty('--primary-colour', '--secondary-colour');
//     document.documentElement.style.setProperty('--secondary-colour', '--primary-colour');
//     alert('clicked');
//   })
// }

// Inverter for the menu icon


colourInverter.addEventListener("click", function () {
  var colourOne = document.documentElement.style.getPropertyValue('--primary-colour');
  var colourTwo = document.documentElement.style.getPropertyValue('--secondary-colour');

  // alert('First ' + colourOne + ' ' + 'Second ' + colourTwo);


  document.documentElement.style.setProperty('--primary-colour', colourTwo);
  document.documentElement.style.setProperty('--secondary-colour', colourOne);
  // alert('clicked');
})

// Inverter for the main page


var colourInverter2 = document.querySelectorAll('.header__invertColour')[1];

colourInverter2.addEventListener("click", function () {
  var colourOne = document.documentElement.style.getPropertyValue('--primary-colour');
  var colourTwo = document.documentElement.style.getPropertyValue('--secondary-colour');

  // alert('First ' + colourOne + ' ' + 'Second ' + colourTwo);


  document.documentElement.style.setProperty('--primary-colour', colourTwo);
  document.documentElement.style.setProperty('--secondary-colour', colourOne);
})

