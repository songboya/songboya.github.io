//获取stepS
var regStepS = document.querySelectorAll(".reg_stepsli li");
// 获取页面同意协议按钮
var agreeProtocol = document.getElementById("agreeProtocol");
 
// 获取要隐藏的协议元素
var regProtocol = document.getElementsByClassName("reg_protocol")[0];
//	获取要显示的协议元素
var regForm = document.getElementsByClassName("reg_form")[0];
var regInf = document.getElementsByClassName("reg_information")[0];
console.log(regInf);
// 绑定点击事件
agreeProtocol.onclick = function() {
	regProtocol.style.display = "none";
	regForm.style.display = "block"
}

//获取reg注册验证码
var verCode = document.getElementById("verCode");
var verInput = document.getElementById("reg_ver");
var verCodeTip = document.getElementsByClassName("reg_tips");
var regNext1 = document.getElementById("regNext1");
var regPhoneNumber = document.getElementById("reg_phoneNumber");
var verCodeNumber = [];

//生成一组验证码
regNewCode();
//随机生成验证码
function regNewCode() {
	for (var i = 0; i < 4; i++) {
		verCodeNumber[i] = Myrandom.Ran(0, 9);
		verCode.innerText += verCodeNumber[i];
	}
}
verCode.onclick = function() {
	verCode.innerText = " ";
	regNewCode();
}
// 判断是否输入正确手机号和验证码
regNext1.onclick = function() {
	if (verInput.value == verCodeNumber.join("") && parseInt(regPhoneNumber.value.length) == 11) {
		verCodeTip[0].style.display = "none";
		verCodeTip[1].style.display = "none";
		regForm.style.display = "none";
		regStepS[0].className = " ";
		regStepS[1].className = "reg_active";
		regInf.style.display = "block";
		}else if (!(verInput.value == verCodeNumber.join("")) && !(parseInt(regPhoneNumber.value.length) == 11)) {
		verCodeTip[0].style.display = "inline-block";
		verCodeTip[1].style.display = "inline-block";
	} else if(!(verInput.value == verCodeNumber.join(""))) {
		verCodeTip[0].style.display = "none";
		verCodeTip[1].style.display = "inline-block";
	} else if (!(parseInt(regPhoneNumber.value.length) == 11)) {
		verCodeTip[0].style.display = "inline-block";
		verCodeTip[1].style.display = "none";
	} 
}

// 获取注册信息页面元素
 var regInfInput = document.querySelectorAll(".reg_information ul li input");
var regInfoStrong = document.querySelectorAll(".reg_information ul li strong");
var regInfButton = document.querySelector(".reg_information button");
var middle = document.getElementsByClassName("middle")[0];


regInfButton.onclick = function () {
	var flag = true;
	if (regInfInput[0].value.length>12 || regInfInput[0].value.length<6){
		flag = false;
		regInfoStrong[0].style.display = "inline" ;
	} else {
		flag = true;
		regInfoStrong[0].style.display = "none" ;
	}
	if (regInfInput[1].value.length>12 || regInfInput[1].value.length<6){
		flag = false;
		regInfoStrong[1].style.display = "inline" ;
	} else {
		flag = true;
		regInfoStrong[1].style.display = "none" ;
	}
	if (regInfInput[1].value != regInfInput[2]) {
		flag = false;
		regInfoStrong[2].style.display = "inline";
	} else {
		flag = true;
		regInfoStrong[2].style.display = "none";
	}
	if (regInfInput[3].value == "") {
		flag = false;
		regInfoStrong[3].style.display = "inline";
	} else {
		flag = true;
		regInfoStrong[3].style.display = "none";
	}
	if (regInfInput[4].value.length != 18) {
		flag = false;
		regInfoStrong[4].style.display = "inline";
	} else {
		flag = true;
		regInfoStrong[4].style.display = "none";
	}
	if (flag) {
		
		regStepS[1].className = " ";
		regStepS[2].className = "reg_active";
		regInf.style.display = "none";
		middle.style.display = "block";
		var t=5;
$(".count").text(t);

function timer(){
	t--;
	$(".count").text(t);
	if(t<=0){
		clearInterval(time);
		location.href="logn.html";
	};
}
var time=setInterval(timer,1000);

	}	
	
}






