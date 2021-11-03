<?php
$students = [
    [
        "nama" => "Maomao",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Fey",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Galih",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Galih",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Galih",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Galih",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ]
];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
</head>

<body>

    <?php foreach ($students as $student) : ?>
        <ul>
            <li>Nama: <?= $student["nama"]; ?> </li>
            <li>Jurusan: <?= $student["jurusan"]; ?> </li>
            <li>NRP: <?= $student["nrp"]; ?> </li>
            <li>Email: <?= $student["email"] ?> </li>
        </ul>
    <?php endforeach; ?>
</body>

</html>