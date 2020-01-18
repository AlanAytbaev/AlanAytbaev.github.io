
// navigation animations
const navBar = document.querySelector('#navbar');
const navPos = navBar.offsetTop;
const home = document.querySelector('#home');
var homePos = home.offsetTop;
var aboutPos = document.querySelector('#about').offsetTop;
var skillsPos = document.querySelector('#skills').offsetTop;
var projectsPos = document.querySelector('#projects').offsetTop;

function fixedNavigation() {

	var pagePos = window.pageYOffset;
	var navBottomPos = navPos + navBar.clientHeight;
	var pageBottom = pagePos + window.clientHeight;
	if (pagePos >= navBottomPos) {
		navBar.classList.add('fixed');
	} else if (pagePos < navPos) {
		navBar.classList.remove('fixed');
	}
	//about.getBoundingClientRect().top + window.pageYOffset
	if (pagePos <= aboutPos) {
		highlightLink('#nav-home');
	} else if (pagePos <= skillsPos) {
		highlightLink('#nav-about');
	} else if (pagePos <= projectsPos) {
		highlightLink('#nav-skills');
	} else {
		highlightLink('#nav-projects');
	}
	function highlightLink(idString) {
		var item = document.querySelector('.highlighted');
		item.classList.remove('highlighted');
		var target = document.querySelector(idString);
		target.classList.add('highlighted');
	}
}

// scroll-triggered animation of elements
var windowHeightOffset = window.innerHeight * 0.7;

function checkElements() {
	var elems = document.querySelectorAll('.hidden');
	elems.forEach(function (item, index) {
		var windowPos = window.pageYOffset + windowHeightOffset + 200;
		scrollTop = window.pageYOffset
		var rect = item.getBoundingClientRect();
		var topPos = rect.top + window.pageYOffset;
		if (topPos <= windowPos) {
			var animationClass = item.getAttribute("animationClass");
			item.className = item.className.replace('hidden', animationClass);
		}
	});
}

function pageNavigation(event) {
	console.log("Clicked");
	var source = event.target;
	console.log(source);
	if (source.classList.contains('nav-item')) {
		var destinationString = source.getAttribute("dest");
		console.log(destinationString);
		var destinationElement = document.querySelector('#' + destinationString);
		console.log(destinationElement);
		var y = destinationElement.offsetTop;
		window.scrollTo(0, y + 1);
	}
}
window.addEventListener('scroll', fixedNavigation);
window.addEventListener('scroll', checkElements);
navBar.addEventListener('click', pageNavigation);