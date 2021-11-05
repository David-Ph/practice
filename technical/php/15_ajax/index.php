<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: login.php");
    exit;
}

require './functions.php';

// pagination
// konfig
// cara mendapatkan jumlah
// ? 1
// $result = mysqli_query($db, "SELECT * FROM mahasiswa");
// $jumlah = mysqli_num_rows($result);
// echo $jumlah;
// ? 2
$limit = 5;
$jumlah = count(query("SELECT * FROM mahasiswa", $db));
$jumlahHalaman = ceil($jumlah / $limit);
$activePage = $_GET["page"] ?? "1";
$skip = ($activePage * $limit) - $limit; // or we can also go activePage > 0 ? (page - 1) * limit : 0;

// query with pagination
$mahasiswa = query("SELECT * FROM mahasiswa LIMIT $skip, $limit", $db);

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
    <script src="js/script.js" defer></script>
</head>
<style>
    img {
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
        <input id="keyword" type="text" name="keyword" size="40" autofocus placeholder="Masukkan complete pencarian" autocomplete="off">
        <button id="tombol-cari" type="submit" name="cari">Cari!</button>
    </form>

    <br>

    <!-- page navigation -->
    <?php if ($activePage > 1) { ?>
        <a href="?page=<?= $activePage - 1 ?>">&laquo;</a>
    <?php } ?>

    <?php for ($i = 1; $i <= $jumlahHalaman; $i++) { ?>
        <?php if ($activePage == $i) { ?>
            <a href="?page=<?= $i ?>"><strong><?= $i ?></strong></a>
        <?php } else { ?>
            <a href="?page=<?= $i ?>"><?= $i ?> </a>
        <?php } ?>
    <?php } ?>

    <?php if ($activePage < $jumlahHalaman) { ?>
        <a href="?page=<?= $activePage + 1 ?>">&raquo;</a>
    <?php } ?>
    <br>

    <div id="container">
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
    </div>
</body>

</html>