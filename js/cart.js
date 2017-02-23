$('.else_1 li').hover(function(){
	$('.else_1 li').attr('class','');
	$(this).addClass('else_2');
	var i=$(this).index();
	$('.content div').css('display','none');
	$('.content div').eq(i).css('display','block');
	})
/*$('.border_left').hover(function(){
	$('.border_left').css('background','white');s
	})*/
/*$('.border_span1').hover(function(){
	$('.border_span1').attr('rotate','180deg');
	})*/