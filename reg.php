<?php

/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'webpage');

/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($link === false) {
    die("ERROR: Could not connect. " .mysqli_connect_error());
}

if (isset($_POST['email'])) {
    $uemail = $_POST['email'];
    $upassword = $_POST['password'];
    $name = $_POST['username'];

    $sql = "insert into users(id, email, password, username) values (NULL, '$uemail', '$upassword', '$name')";

    $result = mysqli_query($link, $sql);

    if ($result) {
        echo "Success!";
    } else {
        echo "Wrong!";
    }
}