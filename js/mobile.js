/*반응형 모바일 움직임 높이 470*/

$(function(){

	function mobile01(){

		$('.mobile_01').stop().animate({marginTop:-470},function(){

			$(".mobile_01 li:first").appendTo(".mobile_01");

			$(".mobile_01").css({marginTop:0});
		});


	}
	setInterval(mobile01,3000);





});