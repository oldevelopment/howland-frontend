$(function() {
	
	inputCode()
	initSlider()
	convertNumber()
	excol()
	inputWidthDynamic()
	bgcolor()
	parallax()
	// AOS.init();

	$('.portfoliomodel .bigbtn,#faq-popup:not(a img)').click(function(){
		$('#faq-popup').toggleClass('active_');
	})
});

function initSlider(){
	if($('.homepageslider').length > 0){

		if ($(window).width() <= 955){
			var hpSlide = new Swiper(".homepageslider", {
				direction: "vertical",
				slidesPerView: "auto",
				centeredSlides: true,
				parallax: true,
				loop: true,
			});

		}else{
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
		}
		
		// hpSlide.slideTo(4, false,false);
	}

	if($('.tmslider').length > 0){
		var hpSlide = new Swiper(".tmslider", {
			speed: 600,
			slidesPerView: "auto",
			parallax: true,
			loop: true,
			spaceBetween: 0,
			navigation: {
				nextEl: '.arw.next_',
				prevEl: '.arw.prev_',
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
			loop: true,
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

	if($('.hgslider').length > 0){

		// romanize
		var names = [];
		$(".hgslider .swiper-slide").each(function(i) {
			names.push($(this).attr("name"));
		});

		var hpSlide = new Swiper(".hgslider", {
			loop: true,
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					var numb = parseInt(index) + 1;
					return '<span class="' + className + '"> <i>'+ romanize(numb) +'.</i> <div class="itm_"><span>' + (names[index]) + '</span></div></span>';
				},
			},
			navigation: {
				nextEl: '.arw.next_',
				prevEl: '.arw.prev_',
			  },
		});

		hpSlide.on('slideChange', function (e) {
			$('.itm_').css('max-width','0px');
			bgcolor();

			var itm = $('.hgslider .swiper-pagination-bullet.swiper-pagination-bullet-active');
			itm.find('.itm_').css('max-width', itm.find('span').width()+'px');
			// console.log('*** mySwiper.activeIndex', hpSlide.activeIndex);
		});
	}
	
}

function bgcolor(){
	$(window).on("scroll touchmove", function() {
		var scroll = $(window).scrollTop();
		$('[data-bg]').each(function(){

			var position = parseInt($(this).position().top) -(parseInt($(this).innerHeight()) / 2) ;
			
			if (scroll > position) {
				$('body').css(
				{
					'background-color' : $(this).attr("data-bg"),
					'color' : $(this).attr("data-color"),
				 }
				);

				if($(this).attr('data-color') == '#2628C4'){
					$('#mainav').addClass('gr_');
				}else{
					$('#mainav').removeClass('gr_');
				}
			};
		})

		if($('[data-count]').length > 0){
			

			$('[data-count]').each(function(){

				var position2 = parseInt($('#fees').position().top) -(parseInt($('#fees').innerHeight()) / 2) ;
				
				if (scroll > position2) {
					
					$($(this).attr('data-class')).html($(this).attr('data-count'));
					
				};
			})
		}
	})

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

function excol(){
	$('.excol-icon').click(function(){
		var pr = $(this).parents('.each-ec');

		if (pr.hasClass('active')) {
			pr.removeClass('active');
			pr.find('.ecBody').css('max-height','0px');
		}else{
			var innerHeight = pr.find('.wrap_').innerHeight();
			pr.addClass('active');
			pr.find('.ecBody').css('max-height',innerHeight+'px');
		}
	});
}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function convertNumber(){
	if($('[data-roman]').length > 0){
		$('[data-roman]').each(function(){
			$(this).text(romanize($(this).attr('data-roman')) + '.');
		})
	}
}

function inputWidthDynamic(){
	if($('.width-dynamic').length > 0){

		$.fn.textWidth = function(text, font) {
		
			if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
			
			$.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
			
			return $.fn.textWidth.fakeEl.width();
		};
		
		$('.width-dynamic').on('input', function() {
			var inputWidth = $(this).textWidth();
			$(this).css({
				width: inputWidth
			})
		}).trigger('input');
		
		
		function inputWidth(elem, minW, maxW) {
			elem = $(this);
		}
		
		var targetElem = $('.width-dynamic');
		
		inputWidth(targetElem);

		// textarea
		!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).autosize=t()}(this,function(){var e=new Map;function t(t){var o=e.get(t);o&&o.destroy()}function o(t){var o=e.get(t);o&&o.update()}var r=null;return"undefined"==typeof window?((r=function(e){return e}).destroy=function(e){return e},r.update=function(e){return e}):((r=function(t,o){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return function(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!e.has(t)){var o,r=null,n=window.getComputedStyle(t),i=(o=t.value,function(){s({testForHeightReduction:""===o||!t.value.startsWith(o),restoreTextAlign:null}),o=t.value}),l=function(o){t.removeEventListener("autosize:destroy",l),t.removeEventListener("autosize:update",a),t.removeEventListener("input",i),window.removeEventListener("resize",a),Object.keys(o).forEach(function(e){return t.style[e]=o[e]}),e.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,textAlign:t.style.textAlign,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",l),t.addEventListener("autosize:update",a),t.addEventListener("input",i),window.addEventListener("resize",a),t.style.overflowX="hidden",t.style.wordWrap="break-word",e.set(t,{destroy:l,update:a}),a()}function s(e){var o,i,l=e.restoreTextAlign,a=void 0===l?null:l,d=e.testForHeightReduction,u=void 0===d||d,f=n.overflowY;if(0!==t.scrollHeight&&("vertical"===n.resize?t.style.resize="none":"both"===n.resize&&(t.style.resize="horizontal"),u&&(o=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],o=e[1];t.style.scrollBehavior="auto",t.scrollTop=o,t.style.scrollBehavior=null})}}(t),t.style.height=""),i="content-box"===n.boxSizing?t.scrollHeight-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):t.scrollHeight+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),"none"!==n.maxHeight&&i>parseFloat(n.maxHeight)?("hidden"===n.overflowY&&(t.style.overflow="scroll"),i=parseFloat(n.maxHeight)):"hidden"!==n.overflowY&&(t.style.overflow="hidden"),t.style.height=i+"px",a&&(t.style.textAlign=a),o&&o(),r!==i&&(t.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),r=i),f!==n.overflow&&!a)){var c=n.textAlign;"hidden"===n.overflow&&(t.style.textAlign="start"===c?"end":"start"),s({restoreTextAlign:c,testForHeightReduction:!0})}}function a(){s({testForHeightReduction:!0,restoreTextAlign:null})}}(t)}),t}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],t),e},r.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e}),r});
		autosize(document.getElementById("note"));

	}
}

function parallax(){
	
	$(window).on("load scroll", function() {
		if( $('.fullhero').length > 0 ){
		   elax('.fullhero .cover',0.70);
		   elax('.fullhero .titleMigra',0.90);
		}

		if( $('.figparallax').length > 0 ){
			elax('.figparallax .cover',0.35);
		 }
	});
  
  }

  function elax(obj,kecepatan){
	var parallaxElement = $(obj),
		 parallaxQuantity = parallaxElement.length;
	   window.requestAnimationFrame(function() {
		 for (var i = 0; i < parallaxQuantity; i++) {
		   var currentElement = parallaxElement.eq(i),
			 windowTop = $(window).scrollTop(),
			 elementTop = currentElement.offset().top,
			 elementHeight = currentElement.height(),
			 viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
			 scrolled = windowTop - elementTop + viewPortHeight;
		   currentElement.css({
			 transform: "translate3d(0," + scrolled * kecepatan + "px, 0)"
		   });
		 }
	   });
 }