<?php

    include_once 'dbh.inc.php';

    $QR_code = $_POST['QR_code'];
    $location = $_POST['location'];
    $waterquality = $_POST['waterquality'];
    $distance = $_POST['distance'];


	$sql = "INSERT INTO pyau (QR_code, location, waterquality, distance)
VALUES ('$QR_code','$location','$waterquality','$distance');";
	mysqli_query($conn, $sql);

    header("Location: ../database.insert.php?submit=success");