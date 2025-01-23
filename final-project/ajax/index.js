$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;

  $('nav a.current').removeClass('current');
  $(this).addClass('current');

  $('#images').remove(); 
  $('#content').load(url + ' #images').hide().fadeIn('slow');
});