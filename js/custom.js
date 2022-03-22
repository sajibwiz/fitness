
//     <!-- ==================-->
// <!--=========pre-loader function start  ============-->

	$(".loader_inner").fadeOut();
	$(".loader").delay(100).fadeOut("slow");

// <!--=========pre-loader function  end ============-->
//     <!-- ==================-->


 //     <!-- ==================-->
// <!--=========navabr and back to top start ============-->
		var mybutton = document.getElementById("backtotop");
		var mynav = document.getElementById("navbar")
			
		window.onscroll = function() {scrollFunction()};
			
		function scrollFunction() {
			if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
			mybutton.style.display = "block";
			navbar.style.background = "rgba(0, 0, 0, 0.60)";
			
			} else {
				mybutton.style.display = "none";
				navbar.style.background = "transparent";
			}
		}
		
		// user clicks on the button, scroll to the top of the document
		function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
}
// <!--=========navabr and back to top end ============-->
//     <!-- ==================-->

 //     <!-- ==================-->
// <!--=========navabr toggle menu start ============-->
		var menubtn = document.getElementById("nav-menu"),
		humbarger = document.getElementById("toggle-btn");

		humbarger.onclick = function () {

		"use strict";

		menubtn.classList.toggle("toggle-function");
		humbarger.classList.toggle("active");

		};
// <!--=========navabr toggle menu end ============-->
//     <!-- ==================-->

	// new WOW().init();

		$('.pop_up').magnificPopup({type: 'image'});

	$("#fast-owl").owlCarousel({
		singleItem : true,
		autoPlay : 8000,
		stopOnHover : true,
		navigation : false,
		navigationText : false,
		pagination : true
	});
	$("#owl-shopping").owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsMobile: [530,1],
		pagination : true
	});
	$("#owl-shopping2").owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsMobile: [530,1],
		pagination : true
	});
	$("#owl-travel").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile: [530,1],

		pagination : true
	});
	$("#reviews-slider").owlCarousel({
		singleItem : true,
		autoPlay : 8000,
		stopOnHover : true,
		navigation : false,
		navigationText : false,
		pagination : true
	});
	$("#owl-partners").owlCarousel({
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile: [530,1],
		autoPlay : 5000,
		stopOnHover : true,
		pagination : false
	});
	$("#owl_gym_gallery").owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile: [530,1],
		autoPlay : 5000,
		stopOnHover : true,
		pagination : true
	});

 //     <!-- ==================-->
// <!--=========portfolio section start ============-->
	$("#gallery-filters li").click(function () {
		$("#gallery-filters li").removeClass('filter-active');
		$(this).addClass('filter-active');
	
		var Filter = $(this).data("filter");
		$("#gallery-box").fadeTo(100, 0);
	
		$(".gallery-item").fadeOut().css('transform', 'scale(0)');
	
		setTimeout(function () {
		$(Filter).fadeIn(100).css('transform', 'scale(1)');
		$("#gallery-box").fadeTo(300, 1);
		}, 400);
	});
  // <!--=========potfolio section end ============-->
  //     <!-- ==================-->


//     <!-- ==================-->
// <!--=========counterup section end ============-->
const counters = document.querySelectorAll('.counter');
for(let n of counters) {
    const updateCount = () => {
        const target = + n.getAttribute('data-target');
        const count = + n.innerText;
        const speed = 1000;
        
        const inc = target / speed; 

        if(count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            n.innerText = target;
        }
    }

    updateCount();
}
// <!--=========counterup section end ============-->
 //     <!-- ==================-->

 //     <!-- ==================-->
// <!--=========FQA ? function  start ============-->
	$('.qus').click(function(){
		$('.ans').toggle();
	});
	$('.qus2').click(function(){
		$('.ans2').toggle();
	});
	$('.qus3').click(function(){
		$('.ans3').toggle();
	});
	$('.qus4').click(function(){
		$('.ans4').toggle();
	});
	$('.qus5').click(function(){
		$('.ans5').toggle();
	});
// <!--=========FQA ? function  end ============-->
 //     <!-- ==================-->

 var singin_page = document.getElementById('singin_id');
 var singup_page = document.getElementById('singup_id');
 window.onclick = function(event) {
	if (event.target ==singin_page) {
		singin_page.style.display = "none";
	}
	if (event.target ==singup_page) {
		singup_page.style.display = "none";
	}
 }