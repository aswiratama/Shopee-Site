$("#register").click(function(){
    var username, password, text;

    // Get the value of the input field with id="numb"
    email =document.getElementById("email").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    kpwd=document.getElementById("kpwd").value;
    
   function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

    function usernameIsValid(username) {
    var validcharacters = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (username.length<=6 || username.length>=15) return false;

    for (var i = 0; i < username.length; i++) {
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
        return (password.length<8 || password.length>16);
    }

    function passwordIsSame(password, kpwd){
        if (password.length != kpwd.length) return false;

        for(var i=0; i<password.length; i++){
            if(password[i]!=kpwd[i]) return false;
        }
    }
//if format is true, insert into database
    if (validateEmail(email)==true && usernameIsValid(username) == true && passwordIsValid(password)==true && passwordIsSame(password, kpwd)==true){
        $.post($("#register").attr("action"), $("register: input").serializeArray(), function(info){
            $("#result").html();

            $("#myForm").submit(function(){
                return false;
            }
    );
})}})