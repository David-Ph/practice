<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: login.php");
    exit;
}
require('./functions.php');

if (isset($_POST["submit"])) {

    // check what is inside $_POST, then kill the process
    // var_dump($_POST); die;

    if (tambahMahasiswa($_POST, $db) > 0) {
        echo "
            <script>
                alert('Data berhasil ditambahkan');
                document.location.href = 'index.php';
            </script>
        ";
    } else {
        echo "Data gagal ditambahkan";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Tambah Data Mahasiswa</title>
</head>

<body>
    <h1>Tambah Data Mahasiswa</h1>
    <form action="" method="post" enctype="multipart/form-data">
        <ul>
            <li>
                <label for="nrp">NRP</label>
                <input type="text" id="nrp" name="nrp" required>
            </li>
            <li>
                <label for="nama">Nama</label>
                <input type="text" id="nama" name="nama" required>
            </li>
            <li>
                <label for="jurusan">Jurusan</label>
                <input type="text" id="jurusan" name="jurusan" required>
            </li>
            <li>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required>
            </li>
            <li>
                <label for="gambar">Gambar</label>
                <input type="file" id="gambar" name="gambar" required>
            </li>
            <li>
                <button type="submit" name="submit">Submit</button>
            </li>
        </ul>
    </form>
</body>

</html>