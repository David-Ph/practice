<?php
// ? array practice
$mahasiswa = ["MaoMao", "23324", "Teknik Informatikan", "phangg@gmail.com"];

$students = [
    ["MaoMao", "23324", "Teknik Informatikan", "phangg@gmail.com"],
    ["Phang", "5765", "Biologi", "maomao@gmail.com"],
    ["Fey", "234234", "Akuntansi", "fey@gmail.com"],
]

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Daftar Mahasiswa</title>
</head>

<body>
    <h1>Daftar Mahasiswa</h1>

    <?php foreach ($students as $student) : ?>
        <ul>
            <?php foreach ($student as $data) : ?>
                <li><?= $data; ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endforeach; ?>

</body>

</html>