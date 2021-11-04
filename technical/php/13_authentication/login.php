<?php
// initialize session
session_start();

if(isset($_SESSION["login"])){
    header("Location: index.php");
    exit;
}

require('./functions.php');

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
                <button type="submit" name="login">Login</button>
            </li>
        </ul>
    </form>
</body>

</html>