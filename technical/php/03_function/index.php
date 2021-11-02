<?php
// ? Create our own function
date_default_timezone_set("Asia/Jakarta");

function salam($time = 0)
{
    if ($time < 12 && $time > 6) {
        return "Selamat Pagi";
    } else if ($time > 12 && $time < 18) {
        return "Selamat Siang";
    } else {
        return "Selamat Malam";
    }
};

$current_time = date("H");
echo $current_time;

$administrator = "MaoMao";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>PHP</title>
</head>

<body>
    <h1><?php echo salam($current_time) ?> <?php echo $administrator ?></h1>
</body>

</html>