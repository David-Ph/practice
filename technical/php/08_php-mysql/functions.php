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
