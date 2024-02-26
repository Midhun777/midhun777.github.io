let menuSrc = document.querySelector(".menu");
let settingsSrc = document.querySelector(".settings");
let backgroundSrc = document.querySelector(".body");
let cardSrc = document.querySelector(".card");
let icon = document.querySelector("i");

var theme = document.getElementById('theme');

theme.onclick = function() {
	document.body.classList.toggle("light-theme");
}


function menuOpenFuncion() {
	menuSrc.style.display = "block";
	settingsSrc.style.display = "none";
}

function menuCloseFuncion() {
	menuSrc.style.display = "none";
	settingsSrc.style.display = "block";
}

function lightMode() {
	backgroundSrc.style.backgroundColor = "#FAFAFA";
	backgroundSrc.style.color = "#484B6A";
	cardSrc.style.color = "#484B6A";
	cardSrc.style.backgroundColor = "#E5E5F1";
	menuSrc.style.backgroundColor = "#E5E5F1E6";
	icon.style.color = "#484B6A";
}