/**
 * Jonny
 * https://www.21tools.it
 *
 */

(function($) {
	if($('.jonny .countdown').length > 0) {
		$('.jonny .countdown').countdown($('.jonny .countdown').data('countdown'), function(e) {
		  $(this).find('.days > div').html(e.strftime('%D'));
		  $(this).find('.hours > div').html(e.strftime('%H'));
		  $(this).find('.minutes > div').html(e.strftime('%M'));
		  $(this).find('.seconds > div').html(e.strftime('%S'));
		});
	}

	if($('.jonny .infos > .videoCover').length > 0) {
		if(Modernizr.touchevents) {
			$('.jonny .infos > .videoCover').hide();
		} else {
			$(window).resize(function() {
				resizeBackgroundVideo();
			});

			setTimeout(function() {
				resizeBackgroundVideo();
			}, 700);
		}
	}

	$('.gallery-btn').each(function() {
		var galleryId = $(this).data('galleryid');
		$('#' + galleryId).lightGallery();

		$(this).on('click', function(e){
			e.preventDefault();
			$('#' + galleryId).find('> a:first-child')[0].click();
		});
	});

	if($('.share-btn').length > 0) {
		$('.share-btn').popover({
			html: true,
			placement: 'top',
			content: $('#share-plugin-content')
		});
	}
}(jQuery));

function resizeBackgroundVideo() {
	var videoCover = jQuery('.videoCover');
	var video = jQuery('.videoCover iframe');

	var aspectRatio = videoCover.data('width') / videoCover.data('height');
	var videoH = video.outerHeight();
	var newW = videoH*aspectRatio;
	var halfNewW = newW/2;

	video.css({"width":newW+"px","left":"50%","margin-left":"-"+halfNewW+"px"});
}
