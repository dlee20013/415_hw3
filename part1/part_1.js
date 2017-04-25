document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function givePassword() {
		alert(0);
	};
	var prob = document.getElementsByClass("problem")[0];
	var err = document.getElementsByClass("error-message")[0];
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
});

