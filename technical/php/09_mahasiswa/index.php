<?php
require './functions.php';

$mahasiswa = query("SELECT * FROM mahasiswa", $db);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>MySQL - Admin</title>
</head>

<body>
    <h1>Daftar Mahasiswa</h1>

    <a href="tambah.php">Tambah Mahasiswa Baru</a>
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
                    <a href="">Ubah</a> |
                    <a href="hapus.php?id=<?= $mhs["id"] ?>" onclick="return confirm('Yakin?');">Hapus</a>
                </td>
                <td><?= $mhs["foto"] ?></td>
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