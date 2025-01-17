$(document).ready(function () {
  const amens = {};
  $('input:checkbox').click(function () {
    $(this).each(function () {
      if (this.checked) {
        amens[$(this).data('id')] = $(this).data('name');
      } else {
        delete amens[$(this).data('id')];
      }
    });
    if (Object.values(amens).length > 0) {
      $('.amenities h4').text(Object.values(amens).join(', '));
    } else {
      $('.amenities h4').html('&nbsp');
    }
  });
});

$.get('http://127.0.0.1:5001/api/v1/status/', function (data, status) {
  console.log(data);
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
