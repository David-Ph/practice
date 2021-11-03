<?php
// cek apakah tombol submit sudah ditekan 
// cek username & password
// jika benar, redirect ke halmaan admin
// jika salah, tampilkan pesan kesalahan

if (isset($_POST["submit"])) {
    if ($_POST["username"] == "admin" && $_POST["password"] == "admin") {
        header("Location: admin.php");
    } else {
        $error = true;
    };
};


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login</title>
</head>
<h1>Login Admin</h1>
<?php if (isset($error)) : ?>
    <h4 style="color: red;">Username atau Password salah</h4>
<?php endif; ?>
<ul>
    <form action="" method="post">
        <li>
            <label for="username">Username</label>
            <input id="username" type="text" name="username">
        </li>
        <li>
            <label for="password">Password</label>
            <input id="password" type="password" name="password">
        </li>
        <li>
            <button type="submit" name="submit">Login</button>
        </li>
    </form>
</ul>

<body>

</body>

</html>