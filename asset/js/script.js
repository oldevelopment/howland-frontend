$(function() {
	
	inputCode()
	initSlider()
});

function initSlider(){
	if($('.homepageslider').length > 0){
		var hpSlide = new Swiper(".homepageslider", {
			speed: 600,
			slidesPerView: "auto",
			centeredSlides: true,
			parallax: true,
			loop: true,
			spaceBetween: 0,
			mousewheel: true,
			keyboard: {
				enabled: true,
			},
			pagination: false,
		});
		// hpSlide.slideTo(4, false,false);
	}

	if($('.relationshipslider').length > 0){
		
		var hpSlideTrig = new Swiper(".relationshipslider-img", {
			speed: 600,
			pagination: false,
			effect: "fade",
		});

		var hpSlide = new Swiper(".relationshipslider", {
			speed: 600,
			slidesPerView: "auto",
			centeredSlides: true,
			parallax: true,
			loop: true,
			spaceBetween: 0,
			mousewheel: true,
			keyboard: {
				enabled: true,
			},
			navigation: {
				nextEl: '.arw.next_',
				prevEl: '.arw.prev_',
			  },
			thumbs: {
				swiper: hpSlideTrig,
			},
			pagination: false,
		});
	}

	// ==

	if($('.accslider').length > 0){
		
		var hpSlideTrig = new Swiper(".accslider-desc", {
			speed: 600,
			pagination: false,
			effect: "fade",
		});

		var hpSlide = new Swiper(".accslider", {
			slidesPerView: "auto",
			centeredSlides: true,
			spaceBetween: 100,
			// loop: true,
			navigation: {
				nextEl: '.arw.next_',
				prevEl: '.arw.prev_',
			  },
			thumbs: {
				swiper: hpSlideTrig,
			},
			pagination: false,
		});
	}
	
}

function inputCode(){
	var vcode = (function(){
		//cache dom
		var $inputs = $("#vcode").find("input");
	  
		//bind events
		$inputs.on('keyup', processInput);
		
		//define methods
		function processInput(e) {
		  var x = e.charCode || e.keyCode;
		  if( (x == 8 || x == 46) && this.value.length == 0) {
			var indexNum = $inputs.index(this);
			if(indexNum != 0) {
			  $inputs.eq($inputs.index(this) - 1).focus();
			}
		  }
		  
		  if( ignoreChar(e) ) 
			return false;
		  else if (this.value.length == this.maxLength) {
			$(this).next('input').focus();
		  }
		}
		function ignoreChar(e) {
		  var x = e.charCode || e.keyCode;
		  if (x == 37 || x == 38 || x == 39 || x == 40 )
			return true;
		  else 
			return false
		}
		
	})();
}