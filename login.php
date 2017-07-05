<html>
<head>
<title>
<body>
<?php
    include 'dbh.php';

$username=$_POST['username'];
$pwd=$_POST['pwd'];

$sql="SELECT * FROM user WHERE username='$username' AND password='$pwd' "
$result=$conn->query($sql);

if(!$row=$result->fetch_assoc()){
    echo "Username or password incorrect!"
}else{
    $_SESSION['id']=$row['id'];
}
?>
</body>
</html>