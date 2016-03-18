var $ball = $('.ball');

$('ball').on('keydown',function(e) {
	var newTop = $ball + Math.random();
	console.log(e.keyCode);
});
