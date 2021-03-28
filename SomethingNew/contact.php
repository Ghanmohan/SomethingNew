<?php

    include_once 'db.php';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];


	$sql = "INSERT INTO contact (name, email, subject, message)
VALUES ('$name','$email','$subject','$message');";
	mysqli_query($conn, $sql);

    header("Location: ../main.php?submit=success");