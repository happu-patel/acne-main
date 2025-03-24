/**
 * @module       RD Navbar
 * @description  Enables RD Navbar Plugin
 */
;




$(document).ready(function () {
  // Toggle menu open when navbar-toggler is clicked
  $(".navbar-toggler").click(function () {
    $("body, html").addClass("toggle-menu");
  });

  // Close menu when cross icon is clicked
  $(".ico-close").click(function () {
    $("body, html").removeClass("toggle-menu");
  });

  // Close menu only when clicking outside the menu or the cross icon
  $(document).on("click", function (e) {
    if (
      $(".navbar-collapse").hasClass("show") && // Check if menu is open
      !$(e.target).closest(".navbar-collapse, .navbar-toggler, .navbar-nav").length // Allow clicks inside navbar items
    ) {
      $("body, html").removeClass("toggle-menu");
    }
  });

  // Fixed header on scroll
  if ($(window).width() >= 768) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 150) {
        $("header").addClass("fixed-header");
      } else {
        $("header").removeClass("fixed-header");
      }
    });
  }

  // Populate menu content
  var menu = $(".navbar-collapse").html();
  var em = $(".ht-detail").html();
  $(".m-menu-scroll").html(menu);
  $(".m-menu-scroll .navbar-nav").after(em);
});
(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        $(document).ready(function () {
            o.RDNavbar({
                stickUpClone: false,
                stickUpOffset: 170
            });
        });
    }
	
	$(document).on('click', '.gt-footersecbt h5', function() {	
		$('.gt-footersecbt').toggleClass('openform');
	});
	
	
	$('.owl-gallery').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				loop:true
			}
		}
	});
	
	$('.owl-testimonial').owlCarousel({
		loop:true,
		margin:50,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:2,
				nav:false,
				loop:true
			}
		}
	});
	
	$('.owl-blog').owlCarousel({
		loop:true,
		margin:40,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:false,
				loop:true
			}
		}
	});
	
	$('.owl-5items').owlCarousel({
		loop:true,
		margin:0,
		dots: false,
		responsiveClass:true,
		autoplay:true,
    	autoplayTimeout:1000,
    	autoplayHoverPause:true,
		responsive:{
			0:{
				items:2,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			800:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:false,
				loop:true
			},
			1100:{
				items:5,
				nav:false,
				loop:true
			}
		}
	});
	
	$('.owl-certificates').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				nav:false
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:false,
				loop:true
			}
		}
	});
	
		
	  
})(jQuery);

// Home Page Slider Code 
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
	delay: 2500,
	disableOnInteraction: false,
  },
  pagination: {
	el: '.swiper-pagination',
	clickable: true,
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
});



// $(window).scroll(function () {
//   if($(window).scrollTop() > 100) {
// 	$(".ob_header").addClass('rws-sticky');
// 	$('#rws-scrolltop').css('opacity', '1');	
//   } else {
// 	$(".ob_header").removeClass('rws-sticky');
// 	$('#rws-scrolltop').css('opacity', '0');
//   }
// });

// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/5ca72d5653f1e453fb8c447e/default';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();


$(document).ready(function() {
    //lazyload

    $(function() {

        $('.lazy').Lazy();

    });    



    //scroll top    

    $(window).scroll(function () {

        if($(window).scrollTop() > 100) 

        {

          $(".scroll-top").addClass('show-scroll');          

        } 

        else 

        {

            $(".scroll-top").removeClass('show-scroll');

        }

    });

    $(".scroll-top").click(function() {

        $("html, body").animate({scrollTop: 0}, 3000);

     });



    //toggle menu

    $(".navbar-toggler").click(function(){

        $("body,html").addClass("toggle-menu");

    });

    $(".ico-close").click(function(){

        $("body,html").removeClass("toggle-menu");

    });

    var menu = $(".navbar-collapse").html();

    var em = $(".ht-detail").html();   

    $(".m-menu-scroll").html(menu);

    $(".m-menu-scroll .navbar-nav").after(em);

});



//fixed header

if($(window).width() >= 768)

{

        $(window).scroll(function() {

            if ($(this).scrollTop() >= 150){  

                $('header').addClass("fixed-header");

            }

            else{

                $('header').removeClass("fixed-header");

            }

        });

    

}

document.addEventListener("DOMContentLoaded", function () {
  const lazyLoadYouTube = (element) => {
    const videoSrc = element.dataset.src;
    const iframe = document.createElement("iframe");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "400");
    iframe.setAttribute("src", videoSrc);
    iframe.setAttribute("title", "YouTube video player");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    iframe.setAttribute("allowfullscreen", true);

    element.parentElement.replaceChild(iframe, element);
  };

  const lazyVideos = document.querySelectorAll(".lazy-video");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lazyLoadYouTube(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  lazyVideos.forEach((video) => {
    observer.observe(video);
  });

  // For immediate video load on click (if user prefers clicking over scrolling)
  document.querySelectorAll(".play-button").forEach((button) => {
    button.addEventListener("click", function () {
      const image = this.previousElementSibling;
      lazyLoadYouTube(image);
    });
  });
});

const imageList = document.querySelector(
  ".social-validation-section-image-list"
);

// Clone the images to allow infinite scrolling
imageList.innerHTML += imageList.innerHTML;

// Start the scrolling loop
let scrollOffset = 0;

function infiniteScroll() {
  scrollOffset -= 1; // Adjust speed here
  if (Math.abs(scrollOffset) >= imageList.scrollWidth / 2) {
    scrollOffset = 0; // Reset to simulate infinite loop
  }
  imageList.style.transform = `translateX(${scrollOffset}px)`;
  requestAnimationFrame(infiniteScroll); // Continuously call the function
}

infiniteScroll();



document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the result section
  const appointmentButton1 = document.querySelector("#Consult-btn");
   const appointmentButtonTop = document.querySelector("#btn1");

    
    
  const enquiryForm = document.getElementById("enquiry-form");


 
appointmentButton1.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      block: "start", // Adjusted to align the top of the section with the viewport
    });
  });


  appointmentButtonTop.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();
//  const offset = enquiryForm.getBoundingClientRect().top + window.scrollY - 20;
const elementPosition = enquiryForm.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - (window.innerHeight / 2) + (enquiryForm.offsetHeight / 2);
    // Scroll to the enquiry form with smooth scrolling
    enquiryForm.scrollIntoView({
      behavior: "smooth",
      top: offsetPosition,
    });
  });
  
  
  
});
