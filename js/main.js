$('html').on('keydown', function (e) {
  var newTop = Math.random() * 1000;
  var newLeft = Math.random() * 1000;
  var $ball = $('<div>');
  var $body = $('body');

  $ball.addClass('ball');
  $body.append($ball);
  $ball.css('top', newTop);
  $ball.css('left', newLeft);
});
