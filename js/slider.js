$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    accessibility: false,
    
    //fade: true
    responsive: [
      {
	      breakpoint: 768,
	      settings: {
	        autoplay: true,
          autoplaySpeed: 5000,
          arrows: true,
          fade: true,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
          fade: true
	      }
	    }
    ]
  });

  $('.slider-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });