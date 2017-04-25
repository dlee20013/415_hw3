document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function givePassword() {
		alert(0);
	};
	var prob = document.getElementsByClass("problem");
	var err = document.getElementsByClass("error-message");
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
});

