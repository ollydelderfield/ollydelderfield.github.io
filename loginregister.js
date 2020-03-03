//Function to userid & pswrd
function check(login)
{
 //The following code checks whether the entered userid and pswrd match
 if(login.userid.value == "ollydelderfield@gmail.com" && login.pswrd.value == "password")
 {
    //Opens the home page while userid & pswrd matches
    window.open('home.html')
  }
 else
 {
   //Displays error message
   alert("Error: Please enter a valid password and/or username")
  }
}


