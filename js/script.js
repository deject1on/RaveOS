// hide login and lang to hamburger menu on resize  ==================================================================================

$(window).resize(hamburgerElements);
hamburgerElements();
function hamburgerElements() {
	if (window.matchMedia('(max-width: 992px)').matches) {
		$("#login").appendTo("#menu");
		$("#lang").appendTo("#menu");
	} else {
		$("#login").appendTo("#header-column");
		$("#lang").appendTo("#header-column");
	}
}
//=================================================================================================================

// show/hide lang=== ====================================================================================================

$('#lang-eng').click(function () {
	$('#lang-rus').toggleClass('active'); // toggle show/hide lang on click
	if ($('#lang-rus').hasClass('active')) {
		$('#wrapper').click(function (e) {
			if (!e.target.closest('#lang') && $('#lang-rus').hasClass('active')) { // hide lang if click anywhere on  page
				$('#lang-rus').removeClass('active');
			}
		})
	}
})
//=================================================================================================================


// scroll to top button =====================================================================================================
$(window).scroll(function () {
	if ($(window).scrollTop() > 1500) {
		$('#scroll-top').addClass('show');
	} else {
		$('#scroll-top').removeClass('show');
	}
});
$('#scroll-top').click(function () {    // scroll to top on click 
	$("html, body").animate({ scrollTop: 0 }, 850);
});
//=================================================================================================================

