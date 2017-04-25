document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function givePassword() {
		alert(0);
	};
	alert(1);
	var prob = document.getElementsByClass("problem")[0];
	var err = document.getElementsByClass("error-message")[0];
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
	alert(2);
});

