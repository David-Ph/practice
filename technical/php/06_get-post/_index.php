<?php
$x = 10;

// FUNCTION DOESN'T HAVE ACCESS TO VARIABLE OUTSIDE OF ITS BLOCK SCOPE
function tampilX() {

    global $x;  // look for global variable
    echo $x;
}

// tampilX();

// ? SUPERGLOBALS
// $_GET $_POST $_REQUEST $_SESSION $_COOKIE $_SERVER $_ENV

// ? $_GET
// $_GET["name"] = "MaoMao";
// echo $_GET['NAME"] // MaoMao

// http://localhost/learn/06_get-post/?nama=maomao&age=30
// will fill $_GET["nama"] = "maomao" and $_GET["age"] = 30
var_dump($_GET);

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
        "nama" => "Asu",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Syllenae",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ],
    [
        "nama" => "Saltix",
        "jurusan" => "Teknik Informatika",
        "nrp" => "45563457",
        "email" => "maomao@gmail.com"
    ]
];
?>

<!DOCTYPE html>
<html>

<head>
    <title>Document</title>
</head>

<body>
    <!-- <?php foreach ($students as $student) : ?>
        <ul>
            <li>Nama: <?= $student["nama"]; ?> </li>
            <li>Jurusan: <?= $student["jurusan"]; ?> </li>
            <li>NRP: <?= $student["nrp"]; ?> </li>
            <li>Email: <?= $student["email"] ?> </li>
        </ul>
    <?php endforeach; ?> -->
    <ul>
        <?php foreach ($students as $student) : ?>
            <li>
                <a href="index2.php?nama=<?= $student["nama"] ?>&jurusan=<?= $student["jurusan"] ?>&nrp=<?= $student["nrp"] ?>&email=<?= $student["email"] ?>">
                    <?= $student["nama"]; ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>

</html>