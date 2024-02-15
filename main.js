function textAlert() {
	window.alert("This feature is not yet available 😕");
}

let menuSrc = document.querySelector(".menu");
let settingsSrc = document.querySelector(".settings");
let backgroundSrc = document.querySelector(".body");
let cardSrc = document.querySelector(".card");
let aSrc = document.querySelector(".card");

function menuOpenFuncion() {
	menuSrc.style.display = "block";
	settingsSrc.style.display = "none";
}

function menuCloseFuncion() {
	menuSrc.style.display = "none";
	settingsSrc.style.display = "block";
}

function lightMode() {
	backgroundSrc.style.backgroundColor = "#CFD8DC";
	backgroundSrc.style.color = "black";
	aSrc.style.color = "black";
	cardSrc.style.backgroundColor = "#ECEFF1";

}