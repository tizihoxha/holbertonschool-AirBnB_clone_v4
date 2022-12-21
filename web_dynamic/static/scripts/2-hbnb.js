$('document').ready(function () {
	$.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
		if (response.status === 'OK') {
			$('DIV#api_status').addClass('available');
		} else {
			$('DIV#api_status').removeClass('available');
		}
	});

	const amenityDict = {};
	$('input[type=checkbox]').change(function () {
		if ($(this).is(':checked')) {
			amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
		} else {
			delete amenityDict[$(this).attr('data-id')];
		}
		$('.amenities h4').text(Object.values(amenityDict).join(', '));
	});
});
