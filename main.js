let aboutOffset = $('#about').offset().top;

$(window).scroll(function() {
	let wscroll = $(window).scrollTop();
	if (wscroll>100) {
		$('#main-nav').css('background-color', 'gray')
		$('#main-nav').css('padding', '10px 70px')
	
	}
	else{
		$('#main-nav').css('padding', '10px 0px')
		$('#main-nav').css('background-color', 'transparent')
		
	}
})
$(window).scroll(function() {
	let wscroll = $(window).scrollTop();
	if (wscroll>aboutOffset -50) {
		
		
		$('#btnup').fadeIn(800);

	}
	else{
		
		$('#btnup').fadeOut(800);
	}
	
})

$('#btnup').click(function () {
	$('html,body').animate({scrollTop:0} , 2000)
	
})
$('nav a').click( function (e) {
	let linkHref= $(e.target).attr('href')
	let sectionOffset = $(linkHref).offset().top
	$('html,body').animate({scrollTop:sectionOffset} , 2000)
	
})
