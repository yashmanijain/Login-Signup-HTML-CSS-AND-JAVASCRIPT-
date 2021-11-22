var email = document.forms['form']['email'];
var password= document.forms['form']['password'];


var emailerror = document.getElementById('emailerror');
var passerror= document.getElementById('passerror');
var passerror2 = document.getElementById('paserror2')
var confirmpass= document.getElementById('pass1')

email.addEventListener('textInput', emailver);
password.addEventListener('textInput', passver);
confirmpass.addEventListener('textInput', confirmpass2);

function validate(){
    if(email.value.length<9){
        emailerror.style.display = "block";
        email.focus();
        email.style.border = "1px solid red";
        return false;
    }

    if(password.vale.length<8){
    passerror.style.display = "block";
    password.focus();
    password.style.border = "1px solid red";
    return false;
}
    if(password!== confirmpass){
    passerror2.style.display = "block";
    confirmpass.focus();
    confirmpass.style.border= "1px solid red"
    return false;

}}

function emailver(){
    if(email.value.length>=9){
        email.style.border="1px solid green";
        emailerror.style.display= "none";
        return true;
    }
}

function passver(){
    if(password.value.length>=6){
      passerror.style.display="none"
      password.style.border= "1px solid green";
     return true;
    }
}
function confirmpass2(){
    if(password === confirmpass){
      passerror2.style.display="none"
      confirmpass.style.border= "1px solid green";
     return true;
    }
}


function savedata(){
    localStorage.setItem("Email", email)
    localStorage.setItem("Password", password)
}