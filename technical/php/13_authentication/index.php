<?php
session_start();
if(!isset($_SESSION["login"])){
    header("Location: login.php");
    exit;
}

require './functions.php';

$mahasiswa = query("SELECT * FROM mahasiswa", $db);

// jika tombol cari diklik
// timpa mahasiswa

if (isset($_POST["cari"])) {
    $mahasiswa = cari($_POST["keyword"]);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>MySQL - Admin</title>
</head>
    <style>
        img{
            max-width: 100px;
        }
    </style>
<body>
    <a href="logout.php">Logout</a>
    <h1>Daftar Mahasiswa</h1>

    <a href="tambah.php">Tambah Mahasiswa Baru</a>
    <br>

    <br>
    <form action="" method="post">
        <input type="text" name="keyword" size="40" autofocus placeholder="Masukkan complete pencarian" autocomplete="off">
        <button type="submit" name="cari">Cari!</button>
    </form>

    <br>

    <table border="1" cellpadding="10" , cellspacing="0">
        <tr>
            <th>No.</th>
            <th>Aksi</th>
            <th>Foto</th>
            <th>NRP</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </tr>
        <?php $i = 1; ?>
        <?php foreach ($mahasiswa as $mhs) { ?>
            <tr>
                <td><?= $i ?></td>
                <td>
                    <a href="ubah.php?id=<?= $mhs["id"]; ?> ">Ubah</a> |
                    <a href="hapus.php?id=<?= $mhs["id"]; ?>" onclick="return confirm('Yakin?');">Hapus</a>
                </td>
                <td><img src="<?= $mhs["foto"] ?>" alt=""></td>
                <td><?= $mhs["nrp"] ?></td>
                <td><?= $mhs["nama"] ?></td>
                <td><?= $mhs["email"] ?></td>
                <td><?= $mhs["jurusan"] ?></td>
            </tr>
            <?php $i++; ?>
        <?php } ?>
    </table>
</body>

</html>