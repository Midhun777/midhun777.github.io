let menuSrc = document.querySelector(".menu");
let settingsSrc = document.querySelector(".settings");
var theme = document.getElementById('theme');

theme.onclick = function() {
	document.body.classList.toggle("light-theme");
	const moonIcon = document.querySelector('.fa-moon');
	const sunIcon = document.querySelector('.fa-sun');
	if (document.body.classList.contains('light-theme')) {
		sunIcon.classList.replace('fa-sun', 'fa-moon');
	} else {
		moonIcon.classList.replace('fa-moon', 'fa-sun');
	}
}

function menuOpenFuncion() {
	menuSrc.style.display = "block";
	settingsSrc.style.display = "none";
}

function menuCloseFuncion() {
	menuSrc.style.display = "none";
	settingsSrc.style.display = "block";
}
