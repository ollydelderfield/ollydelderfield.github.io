function formValidation()
{
var userid = document.registration.firstname;
var uname = document.registration.lastname;
var email = document.registration.email;
var passid = document.registration.password;
var upassid = document.registration.confirmpassword;
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{
if(ValidateEmail(uemail))
{
}
} 
}
} 
}
}
}
}
return false;
}

function allLetter(userid)
{ 
var letters = /^[A-Za-z]+$/;
if(userid.value.match(letters))
{
return true;
}
else
{
alert('Please enter a valid first name');
userid.focus();
return false;
}
}

 //This determines what the username and password should be
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('please enter a valid last name');
uname.focus();
return false;
}
}


function ValidateEmail(email)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty");
passid.focus();
return false;
}
return true;
}

function upassid_validation(upassid,mx,my)
{
var upassid_len = upassid.value.length;
if (upassid_len == 0 ||upassid_len >= my || upassid_len < mx)
{
alert("Please confirm your password");
upassid.focus();
return false;
}
return true;
}
  }
 else
 {
 //The following code checks whether the entered userid and pswrd match
 if(register.userid.value == "Oliver" && register.uname.value == "Delderfield" && register.email.value == "ollydelderfield@gmail.com" && register.passid.value == "password" && register.upassid.value == "password")
  {
    //Opens the home page while userid & uname & email & passid & upassid matches
    window.open('index.html')