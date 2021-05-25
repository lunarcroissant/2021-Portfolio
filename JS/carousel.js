const prevRefClick = document.querySelector('.testimonials__arrow')[0];
const nextRefClick = document.querySelector('.testimonials__arrow')[1];

var authorItem = document.querySelectorAll('.testimonials__author');
var RefItem = document.querySelectorAll('.testimonials__testimonialIndividial');

const authorTrack = document.querySelector('.testimonials__authorsList');
const authorItems = Array.from(authorTrack.children);
const authorItemWidth = authorItems[0].getBoundingClientRect().width;

authorItems[0].style.width = authorItemWidth * 0 + 'px';
authorItems[1].style.width = authorItemWidth * 1 + 'px';
authorItems[2].style.width = authorItemWidth * 2 + 'px';

const referenceTrack = document.querySelector('.testimonials__testimonialsList');
const referenceItems = Array.from(referenceTrack.children);
const referenceWidth = referenceItems[0].getBoundingClientRect().width;

referenceItems[0].style.width = referenceWidth * 0 + 'px';
referenceItems[1].style.width = referenceWidth * 1 + 'px';
referenceItems[2].style.width = referenceWidth * 2 + 'px';


var progressIndicator = document.querySelector('.testimonials__progressIndicator');


function moveToNextRef() {

}

prevRefClick
