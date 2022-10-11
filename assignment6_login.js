window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}
const person = {
	username: "" ,
    password: ""
};
function checkLogin(){
	getPersonFromRegister();
	const userInput = document.forms["myLogin"]["username"];
	const passwordInput = document.forms["myLogin"]["password"];
	if(userInput.value == person.username && passwordInput.value == person.password){
		alert("Login Complete.");
		return true;
	}
	else{
		alert("Username or Password incorrect.");
		return false;
	}
}
function getPersonFromRegister(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	person.username = urlParams.get('username');
	person.password = urlParams.get('password');
}

			