window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    
    form.onsubmit = validateForm;
}
var person = {
    firstname:"" ,
    lastname: "",
    gender: "",
    birth: "",
    email: "",
    username: "" ,
    password: "",
    password_retype: ""
};

function validateForm() {
    setPeronalData();
    
    
    if(person.lastname==""||person.gender==""||person.birth==""||person.email==""||person.username==""){
        alert("Please Input All Your Data.");
        return false;
    }
    else if(person.password != person.password_retype){
        var errorcheck =  document.getElementById("errormsg");
        errorcheck.innerHTML = "Password is incorrect";
        alert("Password is incorrect.");
        return false;
    }
    else{
        alert("Register Complete.");
        return true;
    }
}
function setPeronalData(){
    person.firstname = formDocument("myForm","firstname");
    person.lastname = formDocument("myForm","lastname");
    person.gender = formDocument("myForm","gender");
    person.birth = formDocument("myForm","bday");
    person.email = formDocument("myForm","email");
    person.username = formDocument("myForm","username");
    person.password = formDocument("myForm","password");
    person.password_retype = formDocument("myForm","password_recheck");
}
function formDocument(form,attribute){
    var x = document.forms[form][attribute].value;
    return x;
}
