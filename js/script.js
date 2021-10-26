$(document).ready(function(){
	const swiper1 = new Swiper('.gallery_block .swiper-container', {
	    direction: 'horizontal',
	    loop: false,
	    slidesPerView: 1,

	    // Navigation arrows
	    navigation: {
	      	nextEl: '.gallery_block .swiper-button-next',
	      	prevEl: '.gallery_block .swiper-button-prev',
	    },
	    pagination: {
			el: '.gallery_block .swiper-pagination',
		    type: 'bullets',
		    clickable: true
		},
  	});

  	$('.toggle').click(function() {
	    $(this).toggleClass('active');
	    $('.mobile_menu').toggleClass('active');
	});
});