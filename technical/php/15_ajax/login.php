<?php
// initialize session
session_start();
require('./functions.php');

// cek cookie
if (isset($_COOKIE["id"]) && isset($_COOKIE["key"])) {
    $id = $_COOKIE["id"];
    $key = $_COOKIE["key"];

    // ambil username berdasarkan id

    $result = mysqli_query($db, "SELECT username FROM id='$id'");
    $row = mysqli_fetch_assoc($result);

//  cek cookie dan usernama
    if($key === hash('sha256', $row["username"])){
        $_SESSION['login'] = true;
    }
};

// cek session
if (isset($_SESSION["login"])) {
    header("Location: index.php");
    exit;
}

if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $findUser = mysqli_query($db, "SELECT * FROM users WHERE username='$username'");

    if (mysqli_num_rows($findUser) === 1) {

        // cek password
        $row = mysqli_fetch_assoc($findUser);

        if (password_verify($password, $row["password"])) {
            // set session
            $_SESSION["login"] = true;

            // cek remember me

            if (isset($_POST["remember"])) {
                // buat cookie dan enkripsi
                setcookie('id', $row['id'], time() + (60 * 5));
                setcookie('key', hash('sha256', $row['username']), time() + (60 * 5));
            };

            header("Location: index.php");
            exit;
        }
    }

    echo "
            <script>
                alert('Username atau password salah');
            </script>
        ";
};
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login</title>
    <style>
        label {
            display: block;
        }
    </style>
</head>

<body>
    <h1>Login</h1>

    <form action="" method="post">
        <ul>
            <li>
                <label for="username">Username: </label>
                <input type="text" name="username" id="username">
            </li>
            <li>
                <label for="password">Password: </label>
                <input type="password" name="password" id="password">
            </li>
            <li>
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">Remember me: </label>
            </li>
            <li>
                <button type="submit" name="login">Login</button>
            </li>
        </ul>
    </form>
</body>

</html>