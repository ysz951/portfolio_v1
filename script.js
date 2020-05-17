
// scroll animation

$(document).ready(function(){
	$(".nav li > a").click(function(){
		$(".nav li > a").removeAttr("class");
		$(this).addClass("home")
	});
$(".nav li a").click(function(){
	var e=$(this.hash);$("body,html").animate({scrollTop:e.offset().top},700);
	return false});
$(window).scroll(function(){if($(this).scrollTop()>500){
	$(".top").fadeIn()}else{$(".top").fadeOut()}});
$(".top").click(function(){$("body,html").animate({scrollTop:0},500);
	return false})})
          