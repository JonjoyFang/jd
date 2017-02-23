function run(num,over){
	for(nums=1;nums<=6;nums++){
		var lunbo='lunbo'+nums;
		var radius='radius'+nums;
		document.getElementById(lunbo).style.display='none';
		document.getElementById(radius).className="";
		}
		var lb='lunbo'+num;
		var rs='radius'+num;
		document.getElementById(lb).style.display='block';
		document.getElementById(rs).className='lb1';
		num++;
	if(num>6)
		{
			num=1;
			}
	if(over===1){
		return false;
		}
			time=setTimeout(function(){
				run(num);
				},1000);
	}
run(1);
function stop(num){
	run(num,1);
		clearTimeout(time);
		
	}
function start(num){
	time=setTimeout(function(){
		run(num);
		},1000);
	}
	
	
	/*返回顶部*/
window.onresize=window.onscroll=function(){
	var back=document.getElementById("back");
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop<100){
		back.style.display="none";
		}
	else{
		back.style.display="block";
		}
	var timer=null;
	back.onclick=function(){
		timer=setInterval(function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	
		var speed=Math.floor(-scrollTop/5);
			if(scrollTop==0){
			clearInterval(timer);
			}
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop+speed;
		},50);
		
		}
		
		
	}