document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin-btn").onclick = function pushed() {
		var pw = document.getElementById("login_password").value;
		var un = document.getElementById("login_username").value;
		alert("Username is: " + un + "and Password is: " + pw);
	});
});