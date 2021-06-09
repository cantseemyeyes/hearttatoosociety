/* 
This JavaScript Document
will enable the slide n hide 
vector menu. 

- it will detect if the user clicks on the button class="btn-menu"
- each click will toggle ON and OFF the class="show", between these two states:
   <nav class="show">
    OR
   <nav>
- css style will take care of what to do with class="show"

More on javascript in a future lesson
*/


(function(d){
	
	// d = document
	
	const $nav = d.querySelector('nav');
	const $logo = d.querySelector('.logo');
	const $btn = d.querySelector('#btn_menu');
	
	$btn.addEventListener('click', function(){
		
		$nav.classList.toggle('show');
		$logo.classList.toggle('logo_left');
	
	});


	$(".trigger_popup_fricc").click(function(e){
		e.preventDefault();
	$('.hover_bkgr_fricc').show();
	});

	$('.popupCloseButton').click(function(){
		$('.hover_bkgr_fricc').hide();
	});

})(document);





// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var stickyNavbar = document.getElementById("sticky_navbar");
var regNavBar = document.getElementsByClassName("reg_navbar")[0];
var regNavBarPhoto = document.getElementsByClassName("reg_navbar")[1];

// Get the offset position of the navbar
var sticky = stickyNavbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if(window.innerWidth > 700){
		if (window.pageYOffset > sticky) {
			regNavBar.style.visibility = "hidden";
			regNavBarPhoto.style.visibility = "hidden";
			stickyNavbar.style.display = "flex";
			stickyNavbar.classList.add("sticky");
		} else {
			regNavBar.style.visibility = "visible";
			regNavBarPhoto.style.visibility = "visible";
			stickyNavbar.style.display = "none";
			stickyNavbar.classList.remove("sticky");
		}
	}
	else {
		regNavBar.style.visibility = "visible";
		regNavBarPhoto.style.visibility = "visible";
		stickyNavbar.style.display = "none";
		stickyNavbar.classList.remove("sticky");
	}
}