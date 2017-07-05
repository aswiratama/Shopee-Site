
#database

Uses PHP and MySQL
Start making a database by:

Download a localhost server (e.g.: XAMPP) that has MySQL, PHP, and Apache built in
The dbh.php establishes the connection
The databaseready.php creates the database and the tables needed for this website

#web pages
index.html is the home for this project
login.html takes you to the login page
register.html takes you to the registration page
preferred_seller.html takes you to the preferred seller registration page (which is just ID verification)
success.html redirects you to http://www.shopee.co.id after successful login, in about 3 seconds.

Each page, with the exception of success.html has its respective css documents

Login and register uses a script that validates the input forms. 

Login, register, and preferred seller has a PHP page whose purpose is to look for and input data into the database. The PHP page and SQL statements in the PHP file are invoked when the action button in the respective documents is pressed.