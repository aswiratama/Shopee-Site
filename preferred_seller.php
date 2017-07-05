<html>
<head>
<title>
<body>
<?php
    include 'dbh.php';

$email=$_POST['email']
$username=$_POST['username'];
$pwd=$_POST['password'];
$conn==mysql_connect('localhost', 'root', '')
if(mysqli_query($connect "INSERT INTO user(email,username,password)
				VALUES('$email','$username','$password','$email')")){
                    echo 'Pendaftaran berhasil. Kini saatnya mendaftar menjadi Preferred Seller!';
                    echo '<a href="preferred_seller.html">Daftar</a>';
                }

$result=$conn->query($sql);

$sql="SELECT * FROM PrefferedSellers WHERE username='$username'"
$result=$conn->query($sql);

if(!$row=$result->fetch_assoc()){
    header("Location: preferred_seller.html");
}else{
    HEADER("Location success.html");
}


?>
</body>
</html>