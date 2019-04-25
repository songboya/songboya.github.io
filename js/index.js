
var mySwiper = new Swiper('.swiper-container', {
	autoplay: 2000,
	loop: true,
	pagination: '.swiper-pagination',
	keyboardControl: true,
	pagination: '.swiper-pagination',
	paginationClickable: true,
});
var comtainer = document.getElementsByClassName("swiper-container")[0];
comtainer.onmouseenter = function() {
	mySwiper.stopAutoplay();
};
comtainer.onmouseleave = function() {
	mySwiper.startAutoplay();
}
// 给购物车添加商品
$(".clicka").click(function(){
	var addP = $("<p></p>");
	  $(".shop").append(addP);
	  $(".num").text($(".shop p").length);
});
// 返回顶部
var toTop = document.getElementById("toTop");
 
toTop.onclick = function(){
	
		if(document.body.scrollTop){
		document.body.scrollTop = 0;
	}else{
		document.documentElement.scrollTop = 0;
	}
}
window.onscroll = function(){
	var scrollT = document.body.scrollTop||document.documentElement.scrollTop;
	if(scrollT>50){
		toTop.style.opacity = 1.0;
	}
	
}




