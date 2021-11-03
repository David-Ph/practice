<?php
// koneksi ke database
$db = mysqli_connect("localhost", "root", "", "phpdasar");

// ambil/query data dari table mahasiswa
// $result = mysqli_query($db, "SELECT * FROM mahasiswa");

function query($query, $db) {
    $result = mysqli_query($db, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

function tambahMahasiswa($data, $db) {
    // ambil data dari form
    $nrp = htmlspecialchars($data["nrp"]);
    $nama = htmlspecialchars($data["nama"]);
    $jurusan = htmlspecialchars($data["jurusan"]);
    $email = htmlspecialchars($data["email"]);
    $gambar = htmlspecialchars($data["gambar"]);

    // query insert data
    $query = "INSERT INTO mahasiswa VALUES(NULL, '$nama', '$nrp', '$jurusan', '$email', '$gambar')";

    $result = mysqli_query($db, $query);

    // check for error: 
    // mysqli_affected_rows($cdb); will return -1 if no rows are affected

    return mysqli_affected_rows($db);
}

function hapusMahasiswa($id) {
    global $db;

    mysqli_query($db, "DELETE FROM mahasiswa WHERE id = $id");

    return mysqli_affected_rows($db);
}
