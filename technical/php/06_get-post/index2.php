<?php
if (
    !isset($_GET["nama"]) ||
    !isset($_GET["nrp"]) ||
    !isset($_GET["jurusan"]) ||
    !isset($_GET["email"])
) {
    // if there is no variable stored in there
    // redirect user to index.php
    header("Location: index.php");

    exit;
};
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
</head>

<body>
    <ul>
        <li>Nama: <?= $_GET["nama"]; ?> </li>
        <li>Jurusan: <?= $_GET["jurusan"]; ?> </li>
        <li>NRP: <?= $_GET["nrp"]; ?> </li>
        <li>Email: <?= $_GET["email"] ?> </li>
    </ul>

    <a href="index.php">Kembali ke daftar mahasiswa</a>
</body>

</html>