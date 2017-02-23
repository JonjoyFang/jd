function login(){
	$('.login_psd').css('color','red');
	$('.dis_none').css('display','block');
	}
function dis_none(){
	$('.dis_none').css('display','none');
	}
function checked1(){
	var gouxuan=$('input[type=checkbox]').is(':checked'); 

	if(gouxuan){
		$('.dis_none1').css('display','block');
		}
		else{
			$('.dis_none1').css('display','none');
			}
	}