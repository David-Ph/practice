<?php
require '../functions.php';
$keyword = $_GET["keyword"];
$query = "SELECT * FROM mahasiswa WHERE 
            nama LIKE '%$keyword%' OR
            nrp LIKE '%$keyword%' OR
            email LIKE '%$keyword%' OR
            jurusan LIKE '%$keyword%'
            ";
$mahasiswa = query($query, $db);


?>

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
            <td><?= $i + $skip ?></td>
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