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

    // upload gambar
    $gambar = upload();
    if (!$gambar) {
        return false;
    }

    // query insert data
    $query = "INSERT INTO mahasiswa VALUES(NULL, '$nama', '$nrp', '$jurusan', '$email', '$gambar')";

    $result = mysqli_query($db, $query);

    // check for error: 
    // mysqli_affected_rows($db); will return -1 if no rows are affected

    return mysqli_affected_rows($db);
}

function upload() {

    $namafile = $_FILES['gambar']['name'];
    $ukuran = $_FILES['gambar']['size'];
    $error = $_FILES['gambar']['error'];
    $temp = $_FILES['gambar']['tmp_name'];

    // cek apakah ada gambar
    if ($error === 4) {
        echo "
            <script>
                alert('Pilih gambar terlebih dahulu');
            </script>
        ";
        return false;
    };

    // cek apakah gambar
    $validExt = ["jpg", "png", "jpeg"];

    $ext = explode('.', $namafile);

    // get last element of array
    $ext = strtolower(end($ext));

    if (!in_array($ext, $validExt)) {
        echo "
            <script>
                alert('Invalid extension');
            </script>
        ";
        return false;
    }

    if ($ukuran > 1000000) {
        echo "
            <script>
                alert('Ukuran gambar terlalu besar');
            </script>
        ";
        return false;
    }

    // pindahkan file
    $namafilebaru = 'img/' . $namafile . rand(0, 1000);

    move_uploaded_file($temp, $namafilebaru);

    return $namafilebaru;
}

function ubahMahasiswa($data) {
    global $db;
    // ambil data dari form
    $nrp = htmlspecialchars($data["nrp"]);
    $nama = htmlspecialchars($data["nama"]);
    $jurusan = htmlspecialchars($data["jurusan"]);
    $email = htmlspecialchars($data["email"]);
    $gambarLama =
        htmlspecialchars($data["gambar-lama"]);

    // cek apakah user pilih gambar baru atau lama
    if ($_FILES["gambar"]["error"] === 4) { // error 4 berarti tidak ada gambar
        $gambar = $gambarLama;
    } else {
        $gambar = upload();
    }



    $id = $data["id"];

    // query insert data
    $query = "UPDATE mahasiswa SET
            nrp = '$nrp',
            nama = '$nama',
            jurusan = '$jurusan',
            email = '$email',
            foto = '$gambar'
            WHERE id = $id
        ";

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

function cari($keyword) {
    global $db;

    $query = "SELECT * FROM mahasiswa WHERE 
            nama LIKE '%$keyword%' OR
            nrp LIKE '%$keyword%' OR
            email LIKE '%$keyword%' OR
            jurusan LIKE '%$keyword%'
            ";

    return query($query, $db);
}

function registrasi($data){
    global $db;

    $username = strtolower(stripslashes($data["username"]));
    $password = mysqli_real_escape_string($db, $data["password"]);
    $password2 = mysqli_real_escape_string($db, $data["password2"]);

    // cek konfirmasi password
    if($password !== $password2){
        echo "
            <script>
                alert('password dan konfirmasi password harus sama!');
            </script>
        ";
        return false;
    }

    // cek apakah username sudah terdaftar
    $findUser = mysqli_query($db, "SELECT username FROM users WHERE username = '$username'");
    
    if(mysqli_fetch_assoc($findUser)){
        echo "
            <script>
                alert('username sudah terdaftar');
            </script>
        ";
        return false;
    }
    
    // enkripsi password
    $password = password_hash($password, PASSWORD_DEFAULT);
    
    // tambahkan user baru ke password
    mysqli_query($db, "INSERT INTO users VALUES (NULL, '$username', '$password')");
    
    return mysqli_affected_rows($db);
}