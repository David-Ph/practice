<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
</head>

<body>
    <!-- <form action="index4.php" method="post">
        Masukkan nama:
        <input type="text" name="nama">
        <br>
        <button name='submit' type="submit">Kirim!</button>
    </form> -->

    <?php if (isset($_POST["submit"])) : ?>
        <h1>Halo, Selamat datang <?= $_POST["nama"]; ?> </h1>
    <?php endif; ?>
    <form method="post">
        Masukkan nama:
        <input type="text" name="nama">
        <br>
        <button name='submit' type="submit">Kirim!</button>
    </form>
</body>

</html>