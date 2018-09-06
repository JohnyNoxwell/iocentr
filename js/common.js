$(function () {
	
	
	$('form').on('submit', function(e) {
		e.preventDefault();
		var url = $(this).attr('action');
		var name = $(this).find('input.name').val();
		var phone = $(this).find('input.phone').val();
		var subjects = $(this).serialize();
		var firstName = name;

		

		$.ajax({
			url: url,
			type: 'POST',
			data: {
				name: name,
				phone: phone,
				subjects: subjects
			},
			cache: false,
			success: function() {
				// Success message
				console.log('Success');
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
	
	$('#modal').modal();
	
	
	
	
	
	
	
	
	$('.phone').mask('0-0000-000-000');
	
	if ($(document).width() <= 580 ) {
		$( ".ege" ).on( "click", function() {
			$("#tabs-1").hide();
			$("#tabs-2").show();
		});
		$( ".oge" ).on( "click", function() {
			$("#tabs-2").hide();
			$("#tabs-1").show();
			
			
		

		});
	}
	$( ".ege" ).on( "click", function() {
		$(".oge input").prop("checked",false); 
		$("#tabs-1 input").prop("checked",false);
	});
	$( ".oge" ).on( "click", function() {
		
		$(".ege input").prop("checked",false); 
		$("#tabs-2 input").prop("checked",false);
	

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
	

	


	$(document).ready(function () {
		$('.slick').slick({
			slidesToShow: 4.5,
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
			slidesToShow: 3.5,
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
			slidesToShow: 4.5,
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
			slidesToShow: 3.5,
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