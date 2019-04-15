function toggleTrans(x){
    x.classList.toggle('activated');
} /**make the toggle turn X**/

//animation at toggle click
var menuToggle = document.getElementById("higher-right-hero");
var element1, element2;

element1 = document.querySelector(".lower-right-hero");
element2 = document.getElementsByTagName("h1")[0];
element3 = document.getElementsByClassName("left-hero")[0];
element4 = document.getElementsByClassName("first-layer")[0];

menuToggle.addEventListener("click", function() {
	element1.classList.toggle('fadeOut');
	element2.classList.toggle('fadeOut');
	element3.classList.toggle('fadeOut');
	element4.classList.toggle('top-over');
	
});

