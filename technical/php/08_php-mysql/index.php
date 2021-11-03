<?php
// koneksi ke database
$db = mysqli_connect("localhost", "root", "", "phpdasar");

// ambil/query data dari table mahasiswa
$result = mysqli_query($db, "SELECT * FROM mahasiswa");

// ambil data (fetch) mahasiswa dari object result / fetch
// mysqli_fetch_row() -> mengembalikan array numeric
// mysqli_fetch_assoc() -> mengembalikan array associative
// mysqli_fetch_array() -> can accept numeric or associative
// mysqli_fetch_object() -> mengembalikan object $mhs->nama

// if you want to check for error
// if (!$result) {
//     echo mysqli_error($db);
// }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>MySQL - Admin</title>
</head>

<body>
    <h1>Daftar Mahasiswa</h1>

    <table border="1" cellpadding="10" , cellspacing="0">
        <tr>
            <th>No.</th>
            <th>Aksi</th>
            <th>NRP</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </tr>
        <?php $i = 1; ?>
        <?php while ($mhs = mysqli_fetch_assoc($result)) { ?>
            <tr>
                <td><?= $i ?></td>
                <td>
                    <a href="">Ubah</a> |
                    <a href="">Hapus</a>
                </td>
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