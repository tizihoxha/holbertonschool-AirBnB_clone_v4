$document.ready(function () {
	const amenityDict = {};
	$('input[type=checkbox]').change(function () {
		if ($(this).is(':checked')) {
			amenityDict[$(this).attr('data-id')] = $(this).attr('data.name');
		} else {
			delete amenityDict[$(this).attr('data-id')];
		}
		$('.amenities h4').text(Object.values(amenityDict).join(', '));
	});
});
