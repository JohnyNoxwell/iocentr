$(function () {
	
	
	$('form').on('submit', function(e) {
		e.preventDefault();
		var url = $(this).attr('action');
		// var name = $(this).find('input.name').val();
		// var phone = $(this).find('input.phone').val();
		var subjects = $(this).serialize();
		// var firstName = name;

		

		$.ajax({
			url: url,
			type: 'POST',
			data: {
				subjects: subjects
			},
			cache: false,
			success: function() {
				// Success message
				console.log('Success');
				$("#modal-success").modal();
			},
			error: function() {
				// Fail message
				console.log('error');
				

			},
			complete: function() {
				// Clear fields
				$('form').trigger("reset");
			}
		});
	});
	
	
	
	$(".jsscroll").click(function() {
		$("html, body").animate({
			 scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			 duration: 500,
			 easing: "swing"
		});
		return false;
 });
	

 var tel = $('#tel');
 tel.removeClass('fixed');
 $(document).on('scroll', function () {
		 if ($('footer').offset().top - $(window).height() < $(window).scrollTop()) {
				 $('.tel').css('bottom', $(window).scrollTop() + $(window).height() - $('footer').offset().top);
		 } else if ($('.questions').offset().top  > $(window).scrollTop()){
			tel.removeClass('fixed');
		 }
		 else {
				 $('.tel').css('bottom', '0');
		 }
		 var header = $('header').height();
		 var position = $(window).scrollTop();
		 var block_position = $('header').offset().top;
		 if (position > block_position) {
				 tel.addClass('fixed');
		 }
		 else {
				 tel.removeClass('fixed');
		 }
	
		});
	
	
	$('.phone').mask('0-0000-000-000');
	
	if ($(document).width() <= 580 ) {
		$( ".ege" ).on( "click", function() {
			$("#tabs-1").hide();
			$("#tabs-2").show();

			$("#tabs-3").hide();
			$("#tabs-4").show();

			$("#tabs-5").hide();
			$("#tabs-6").show();

			$("#tabs-7").hide();
			$("#tabs-8").show();
		});
		$( ".oge" ).on( "click", function() {
			$("#tabs-2").hide();
			$("#tabs-1").show();

			$("#tabs-4").hide();
			$("#tabs-3").show();

			$("#tabs-6").hide();
			$("#tabs-5").show();
			
			$("#tabs-8").hide();
			$("#tabs-7").show();
			
			
		

		});
	}
	$( ".ege" ).on( "click", function() {
		$(".oge input").prop("checked",false); 
		$("#tabs-1 input").prop("checked",false);
		$("#tabs-3 input").prop("checked",false);
		$("#tabs-5 input").prop("checked",false);
		$("#tabs-7 input").prop("checked",false);
	});
	$( ".oge" ).on( "click", function() {
		
		$(".ege input").prop("checked",false); 
		$("#tabs-2 input").prop("checked",false);
		$("#tabs-4 input").prop("checked",false);
		$("#tabs-6 input").prop("checked",false);
		$("#tabs-8 input").prop("checked",false);
	

	});

	$( "#tabs-1 label" ).on( "click", function() {
		
		$(".ege input").prop("checked",false); 
		$("#tabs-2 input").prop("checked",false);
		$(".oge input").prop("checked",true); 

	});
	$( "#tabs-2 label" ).on( "click", function() {
		
		$(".oge input").prop("checked",false); 
		$("#tabs-1 input").prop("checked",false);
		$(".ege input").prop("checked",true);

	});

	$( "#tabs-3 label" ).on( "click", function() {
		
		$(".ege input").prop("checked",false); 
		$("#tabs-4 input").prop("checked",false);
		$(".oge input").prop("checked",true); 

	});
	$( "#tabs-4 label" ).on( "click", function() {
		
		$(".oge input").prop("checked",false); 
		$("#tabs-3 input").prop("checked",false);
		$(".ege input").prop("checked",true);

	});


	$( "#tabs-5 label" ).on( "click", function() {
		
		$(".ege input").prop("checked",false); 
		$("#tabs-6 input").prop("checked",false);
		$(".oge input").prop("checked",true); 

	});
	$( "#tabs-6 label" ).on( "click", function() {
		
		$(".oge input").prop("checked",false); 
		$("#tabs-5 input").prop("checked",false);
		$(".ege input").prop("checked",true);

	});


	$( "#tabs-7 label" ).on( "click", function() {
		
		$(".ege input").prop("checked",false); 
		$("#tabs-8 input").prop("checked",false);
		$(".oge input").prop("checked",true); 

	});
	$( "#tabs-8 label" ).on( "click", function() {
		
		$(".oge input").prop("checked",false); 
		$("#tabs-7 input").prop("checked",false);
		$(".ege input").prop("checked",true);

	});
	

	


	$(document).ready(function () {
		$('.slick').slick({
			slidesToShow: 5,
			infinite: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3.5
					
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 2.2
					
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 2.2,
					
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		$('.slick2').slick({
			slidesToShow: 4,
			infinite: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3.5
					
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 2.2
					
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 2.2,
					
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		$('.slick3').slick({
			slidesToShow: 5,
			infinite: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3.5
					
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 2.2
					
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 2.2,
					
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		$('.slick4').slick({
			slidesToShow: 4,
			infinite: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3.5
					
				  }
				},
				{
				  breakpoint: 580,
				  settings: {
					slidesToShow: 3.2
					
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 3.2,
					
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
	});

	

});