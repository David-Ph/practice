<?php
// ? ARRAY
// variable yang dapat memiliki banyak nilai
// cara baru
$hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

print_r($hari);
echo "<br>";
echo "------";
echo "<br>";

var_dump($hari);
echo "<br>";
echo "------";
echo "<br>";

echo $hari[2];
$hari[] = "Hari baru";
var_dump($hari);
echo "<br>";
echo "------";
echo "<br>";
echo "<br>";
echo "------";
echo "<br>";
// //////////////////////
//? pengulangan pada array
$angka = [3, 2, 6, 1, 8, 9, 4, 5, 12, 15];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <style>
        .kotak {
            width: 50px;
            height: 50px;
            background-color: salmon;
            text-align: center;
            line-height: 50px;
            margin: 3px;
            float: left;
        }

        .clear {
            clear: both;
        }
    </style>
</head>

<body>
    <?php for ($i = 0; $i < count($angka); $i++) { ?>
        <div class="kotak"> <?php echo $angka[$i] ?> </div>
    <?php }; ?>

    <br>

    <div class="clear">
        <?php foreach ($angka as $var) { ?>
            <div class="kotak"><?php echo $var ?></div>
        <?php } ?>
    </div>

    <div class="clear">
        <?php foreach ($angka as $num) : ?>
            <div class="kotak"><?= $num; ?></div>
        <?php endforeach; ?>
    </div>
</body>

</html>