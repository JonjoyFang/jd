
function jishi(){
	var date1=new Date();
	var date2=new Date('2016/11/25 16:57:00');
	var date=date2-date1;
	var minutes=1000*60;
	var hours=minutes*60;
	var hour=parseInt(date/hours);
	var minute=parseInt((date%hours)/minutes);
	var s=parseInt(((date%hours)%minutes)/1000);
	var time=hour+':'+minute+':'+s;
	document.getElementById('id1').innerHTML=time;
	setTimeout('jishi()',1000);
	if(date<=0){
	document.getElementById('id1').innerHTML="00:00:00";
	}
	}
	
	clearTimeout('test()',1000);
	
/*function on(numb){
	for(num=1;num<=5;num++){
		id='over'+num;
		document.getElementById(id).style.display="none";
		}
		id1='over'+numb;
		document.getElementById(id1).style.display="block";
	}*/
	
	
/*tab切换*/
$('.menu li').hover(function(){
	var i=$(this).index();
	$('.menu li').attr('class',''); 
	$(this).attr('class','active');
	$('.content div').css('display','none');
	$('.content div').eq(i).css('display','block');
});
$('.right_part3 li').hover(function(){
	var i=$(this).index();
	$('.right_part3 li').attr('class','');
	$(this).attr('class','right_style1');
	$('.right_part3 div').css('display','none');
	$('.right_part3 div').eq(i).css('display','block');
	});
$('.right_part4 li').hover(function(){
	$('.right_part4 li').attr('class','none');
	$(this).attr('class','part4_li1');
	var i=$(this).index();
	$('.right_part5 div').css('display','none');
	$('.right_part5 div').eq(i).css('display','block');
	
	})
/*$('.fix span').hover(function(){
	$('.fix span').css('background','');
	$('.fix span').css('background','red');
	var i=$(this).index();
	$('.fix div').css('display','none');
	$('.fix div').eq(i).css('display','block');
	})*/
