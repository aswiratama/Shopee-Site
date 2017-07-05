$("#loginbutton").click(function(){
    var username, password, text;

    // Get the value of the input field with id="numb"
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    
    function usernameIsValid(username) {
    var validcharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (username.length<=6 || username.length>=15) return false;

    for (var i = 0, l = username.length; i < l; ++i) {
        if (validcharacters.indexOf(username.substr(i, 1)) == -1) {
            text="Invalid username";
            return false;
        }
        return true;
    }
    }

    function passwordIsValid(password){
        if(password.length<8 || password.length>16){
            text="Invalid password";
            return false;
        }
        return password.length<8 || password.length>16;
    }
//if format is true, check if in database
    if (usernameIsValid(username) == true && passwordIsValid(password)==true){
       // <?php
       //select * from Users where username=username AND password==password
       //
       // ?>

    }

    document.getElementById("demo").innerHTML = text;
    });

