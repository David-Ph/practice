<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <style>
        .kotak {
            width: 30px;
            height: 30px;
            background-color: salmon;
            text-align: center;
            line-height: 30px;
            margin: 3px;
            float: left;
            transition: 1s;
        }

        .kotak:hover {
            transform: rotate(360deg);
            border-radius: 50%;
        }
    </style>
</head>

<body>

    <?php
    $numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    ?>

    <?php foreach ($numbers as $number) : ?>
        <div class="kotak"><?= $number ?></div>
    <?php endforeach; ?>
</body>

</html>