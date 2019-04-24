// 得到购物车商品数量
var num = document.getElementsByClassName("num");
var pS = document.querySelectorAll(".shop p")
console.log(pS);
for(var i = 0;i<num.length;i++){
	num[i].innerHTML = pS.length;
}
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



