/*
* 本JS将一些常用的组件进行封装
*/
//随机算法
var Myrandom = {
	//随机颜色
	Rgb:function () {return Rgb = "rgb("+this.Ran(0,255)+","+this.Ran(0,255)+","+this.Ran(0,255)+")";},
	//随机数
	Ran:function (a,b) {return Math.floor(Math.random()*(b-a+1)+a);},
	//数组随机排序(洗牌算法)
	Ranarray:function (arr) {for (var i = 0; i < arr.length; i++) {var ran = this.Ran(0,arr.length-1);if (ran != i) {var temp = arr[i];arr[i] = arr[ran];arr[ran] = temp;}}return arr;}
};
//匹配大小
var Mymatch = {
	//数字筛选最小值 传入要筛选的参数
	NumberMin:function () {var min = arguments[0];for (var i = 0; i < arguments.length; i++) {if (arguments[i]<min) min = arguments[i];}return min;},
	//数字筛选最大值 传入要筛选的参数
	NumberMax:function () {var max = arguments[0];for (var i = 0; i < arguments.length; i++) {if (arguments[i]>max)max = arguments[i];}return max;},
	//筛选数组中的最小值 传入一个数组为参数
	ArrayMin:function (arr) {var min = arr[0];for (var i = 0; i < arr.length; i++) {if (arr[i] < min) min = arr[i];}return min;},
	//筛选数组中的最大值 传入一个数组为参数
	ArrayMax:function (arr) {var max = arr[0];for (var i = 0; i < arr.length; i++) {if (arr[i] > max)max = arr[i];}return max;}};
//窗口内拖拽
function Mydrages (event) {var even = event || window.event;var w = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)-this.clientWidth;var h = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)-this.clientHeight;var a = even.clientX - this.offsetLeft;var b = even.clientY - this.offsetTop;var move = this;document.onmousemove = function (event) {even = event || window.event;var x = even.clientX - a;var y = even.clientY - b;if (x<0)x=0;if (x>w)x=w;if (y<0)y=0;if (y>h)y=h;move.style.left = x + "px";move.style.top = y + "px";}}
//数组去重
function SelectArray (arr) {var arrN = [arr[0]];for (var i = 0;i<arr.length;i++) {var flag = true;for (var j = 0;j<arrN.length;j++) {if (arr[i] === arrN[j]) {flag = false;}}if (flag) {arrN.push(arr[i]);}}return arrN;}



