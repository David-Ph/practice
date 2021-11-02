<?php

// Conditional / Branching
$i = 10;
if ($i < 20) {
    echo "kecil!";
} else if ($i > 20) {
    echo "besar!";
} else {
    echo "sama!";
}

// ternary
$point = 25;
echo ($point <= 40) ? "pass" : "fail";


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>PHP</title>
    <style>
        .warna-baris {
            background-color: grey;
        }
    </style>
</head>

<body>
    <table border="1" cellspacing="0" cellpadding="10">
        <?php for ($i = 1; $i <= 5; $i++) : ?>
            <?php if ($i % 2 !== 0) : ?>
                <tr class="warna-baris">
                <?php else : ?>
                <tr>
                <?php endif; ?>
                <?php for ($j = 1; $j <= 5; $j++) : ?>
                    <td><?= "$i, $j" ?></td>
                <?php endfor; ?>
                </tr>
            <?php endfor; ?>
    </table>
</body>

</html>