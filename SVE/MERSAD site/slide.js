var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg','5.jpg','6.jpg','7.jpg'];

var imgNumber = 0;
var imgLength = images.length - 1;

function changeImg(x){
	imgNumber += x;
	if (imgNumber > imgLength){
		imgNumber = 0;
	}

	if (imgNumber < 0){
		imgNumber = imgLength;
	}

	document.getElementById('image-1').src = 'images/' + images[imgNumber];
	

	return false;
}

function autoRun(){
	setInterval("changeImg(1)", 7000);
}

function modeliranje(){
	window.location="modeliranje.html";
}


function validacija(){

var username = document.getElementById("username").value;
var pasvord = document.getElementById("password").value;

if(username == "" || username == null ){
	document.getElementById("username").style.backgroundColor = "rgb(547, 239, 165, 0.3)";
	document.getElementById("usern").innerHTML = "Unesite vaš username";
	return false;
}
else if(pasvord == "" || pasvord == null){
		document.getElementById("password").style.backgroundColor = "rgb(547, 239, 165, 0.3)";
		document.getElementById("pass").innerHTML = "Unesite vašu šifru";
		return false;
} 
else if(username.length < 8 || pasvord.length < 8){
		document.getElementById("poruka").innerHTML = "Potrebno je unijeti minimalno 8 znakova";
		
}

else {
	document.getElementById("poruka").innerHTML = "Uspješno";
	window.location="index.html";
}
}
