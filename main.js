function textAlert() {
	window.alert("This feature is not yet available 😕");
}

let menuOpen = document.querySelector(".menu");
let menuOpenCont = document.querySelector(".menu-cont");
let settingsHide = document.querySelector(".settings");

function menuOpenFuncion() {
	menuOpen.style.display = "block";
	settingsHide.style.display = "none";
}

function menuCloseFuncion() {
	menuOpen.style.display = "none";
	settingsHide.style.display = "block";
}