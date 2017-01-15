var score = 0;

document.getElementById('whatsTheScore').innerHTML = score;
document.body.scrollTop = document.documentElement.scrollTop = 0;

$(document).ready(function() {
	$(this).scrollTop(0);

	$('.wrong').on('click' , function(){
		
		$(this).removeClass('wrong answer');
		$(this).addClass('youChoseWrong').append('<span class="glyphicon glyphicon-remove youGuessWrong"></span>');

		$(this).siblings().removeClass('right wrong answer');
		$(this).siblings().addClass('not-picked');

		
		$(this).off('click');
		$(this).siblings().off('click');

	});


	$('.right').on('click', function(){
		$(this).removeClass('right answer');
		$(this).addClass('youChoseRight').append('<span class="glyphicon glyphicon-ok youGuessRight"></span>');;

		$(this).siblings().removeClass('right wrong answer');
		$(this).siblings().addClass('not-picked');

		$(this).off('click');
		$(this).siblings().off('click');

		score += 1;
		document.getElementById('whatsTheScore').innerHTML = score;

	});


});

var reloadButton = document.getElementById('reload')

function reloadPage(){
	window.location.reload;
}
reloadButton.onclick= reloadPage;










