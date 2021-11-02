<?php
//? Loop
// for | while | do..while | foreach

for ($i = 0; $i < 5; $i++) {
    echo "For loop " . $i;
};

echo "<br>";

$i = 0;
while ($i < 5) {
    echo "While loop" . " " . $i;
    $i++;
};

echo "<br>";

$secondI = 0;
do {
    echo "do while " . $secondI;
    $secondI++;
} while ($secondI < 5);

echo "<br>";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>PHP</title>
</head>

<body>
    <table border="1" cellspacing="0" cellpadding="10">
        <?php for ($i = 1; $i <= 3; $i++) : ?>
            <tr> <?php for ($j = 1; $j <= 3; $j++) : ?>
                    <td><?= "$i, $j" ?></td>
                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>
</body>

</html>