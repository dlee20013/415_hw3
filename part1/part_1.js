document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function givePassword() {
		alert(document.getElementById("login_password").value);
		//var img = new Image();
		//img.src = '';
	};
	var prob = document.getElementsByClassName("problem")[0];
	var err = document.getElementsByClassName("error-message")[0];
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
});

