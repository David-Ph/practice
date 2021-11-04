<?php
require('./functions.php');

// ambil data di url
$id = $_GET["id"];
// query data mahasiswa berdasarkan id
$mhs = query("SELECT * FROM mahasiswa WHERE id = $id", $db)[0];
if (isset($_POST["submit"])) {

    if (ubahMahasiswa($_POST) > 0) {
        echo "
            <script>
                alert('Data berhasil diubah');
                document.location.href = 'index.php';
            </script>
        ";
    } else {
        echo "Data gagal diubah";
        echo mysqli_error($db);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Ubah Data Mahasiswa</title>
</head>

<body>
    <h1>Ubah Data Mahasiswa</h1>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?= $mhs["id"] ?>">
        <input type="hidden" name="gambar-lama" value="<?= $mhs["foto"] ?>">

        <ul>
            <li>
                <label for="nrp">NRP</label>
                <input type="text" id="nrp" name="nrp" required value="<?= $mhs["nrp"] ?>">
            </li>
            <li>
                <label for="nama">Nama</label>
                <input type="text" id="nama" name="nama" required value="<?= $mhs["nama"] ?>">
            </li>
            <li>
                <label for="jurusan">Jurusan</label>
                <input type="text" id="jurusan" name="jurusan" required value="<?= $mhs["jurusan"] ?>">
            </li>
            <li>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" required value="<?= $mhs["email"] ?>">
            </li>
            <li>
                <label for="gambar">Gambar</label><br>
                <img src="<?= $mhs['foto'] ?>" alt="" width="100px"><br>
                <input type="file" id="gambar" name="gambar">
            </li>
            <li>
                <button type="submit" name="submit">Submit</button>
            </li>
        </ul>
    </form>
</body>

</html>