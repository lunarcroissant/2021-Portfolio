var primaryColour = ["#303030", "#60D9FF", "#FF7171", "#FFE660", "#1F09A8", "#FFD37C", "#FF949A", "#F64B4B", "#4B7BF6", "#3B41D3", "#007B85", "#B4C4C6", "#30D399"];

var secondaryColour = ["#F9F9F9", "#6A54F3", "#3B41D3", "#F35E54", "#8AFFDC", "#1F2531", "#3835DC", "#303030", "#E3CDFF", "#F9F9F9", "#CFFFF6", "#424546", "#343434"];

// "linear-gradient(45deg, #7C4EFF, #3D73FF)"

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

  var a = Math.round(Math.random() * 12);

  // alert(a);

  document.documentElement.style.setProperty('--primary-colour', primaryColour[a]);
  document.documentElement.style.setProperty('--secondary-colour', secondaryColour[a]);


  localStorage.removeItem("primarySaved");
  localStorage.removeItem("secondarySaved");

  localStorage.setItem("primarySaved", primaryColour[a]);
  localStorage.setItem("secondarySaved", secondaryColour[a]);

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

  if (colourOne == '') {
    document.documentElement.style.setProperty('--primary-colour', '#F9F9F9');
    document.documentElement.style.setProperty('--secondary-colour', '#303030');
  }

  localStorage.setItem("primarySaved", colourTwo);
  localStorage.setItem("secondarySaved", colourOne);

  // alert('clicked');
})

// Inverter for the main page


var colourInverter2 = document.querySelectorAll('.header__invertColour')[1];

colourInverter2.addEventListener("click", function colourSwitcher2() {
  var colourOne = document.documentElement.style.getPropertyValue('--primary-colour');
  var colourTwo = document.documentElement.style.getPropertyValue('--secondary-colour');

  // alert('First ' + colourOne + ' ' + 'Second ' + colourTwo);


  document.documentElement.style.setProperty('--primary-colour', colourTwo);
  document.documentElement.style.setProperty('--secondary-colour', colourOne);

  if (colourOne == '') {
    document.documentElement.style.setProperty('--primary-colour', '#F9F9F9');
    // document.documentElement.style.setProperty('--secondary-colour', '#303030');
  }

  if (colourTwo == '') {
    // document.documentElement.style.setProperty('--primary-colour', '#F9F9F9');
    document.documentElement.style.setProperty('--secondary-colour', '#303030');
  }

  // localStorage.removeItem("primarySaved");
  // localStorage.removeItem("secondarySaved");

  localStorage.setItem("primarySaved", colourTwo);
  localStorage.setItem("secondarySaved", colourOne);

  return [colourOne, colourTwo];

  return (document.documentElement.style.getPropertyValue('--secondary-colour'));
})

// colourInverter2.addEventListener("click", function() {
//   if 
// })



// document.documentElement.style.setProperty('--primary-colour', colourSwitcher2[0]);
// document.documentElement.style.setProperty('--secondary-colour', colourSwitcher2[1]);


// const backToTopBtn = document.querySelector('.footer__backToTopBtn');
// const fullWithContainer = document.querySelector('#fullWidthContainer');

// backToTopBtn.addEventListener("click", function () {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;

//   console.log('clicked');
// })

// backToTopBtn.addEventListener('click', function () {
//   // window.screen.top = '0px';
//   // window.screenY = '0px';
//   // window.screenTop = '0px';
//   console.log(window.scrollY);

//   console.log('return to top');
// })

// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;

//   console.log('why is it not doing anything???')
// }

// Skills filters

var skills = [
  {
    skill: "React",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "JavaScript",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "GraphQL",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "HTML5",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "TypeScript",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "CSS3",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "Jest",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "jQuery",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "Git",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "BitBucket",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "GitLab",
    status: "Experienced",
    categories: ["All", "Code"]
  },
  {
    skill: "Prototyping",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Figma",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Wireframing",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Interaction / UI design",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Journey mapping",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Photoshop",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Illustrator & Affinity Designer",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Adobe XD",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Spline",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Basic UX research",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "Content design",
    status: "Experienced",
    categories: ["All", "Design"]
  },
  {
    skill: "3D modelling",
    status: "Experienced",
    categories: ["All", "Design"]
  }
  
];

function displaySkills (filterTerm) {

  console.log(filterTerm);

  const insertionPoint = document.getElementById('skills-display');
  const activeTab = document.getElementById(filterTerm);
  const previousTab = document.getElementsByClassName('active')[0];

  insertionPoint.innerHTML = '';
  console.log('Cleared HTML');

  while (insertionPoint.lastElementChild) {
    insertionPoint.removeChild(insertionPoint.lastElementChild);
    console.log(insertionPoint.lastElementChild);
  }

  previousTab.classList.remove('active');
  activeTab.classList.add('active');

  const getRelevantSkills = filterTerm === 'All' ? skills : skills.filter((item) => item.categories[1] == filterTerm);

  // const getRelevantSkills = skills.filter((item) => item.categories[1] == filterTerm);
  // e.target.classList.remove('active');

  const skillTitles = getRelevantSkills.map(skillItem => skillItem.skill);

  console.log(skillTitles);

  console.log(insertionPoint);

  const skillItems = (skillTitles.map(skill => {
    var IndividualSkillItem = document.createElement('div');
    var IndividualSkillItemText = document.createElement('p');
    var InsertedTitle = document.createTextNode(skill);
    IndividualSkillItem.classList.add('about__skillItem');
    IndividualSkillItemText.classList.add('about__skillItem2');
    IndividualSkillItemText.appendChild(InsertedTitle);
    IndividualSkillItem.appendChild(IndividualSkillItemText);

    document.getElementById("skills-display").appendChild(IndividualSkillItem);
  }));
};

displaySkills('All');

function alertClick () {
  console.log("hi");
}

alertClick();