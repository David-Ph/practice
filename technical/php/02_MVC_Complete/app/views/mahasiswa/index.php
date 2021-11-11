<div class="container mt-3">

    <div class="row">
        <div class="col-lg-6">
            <?php Flasher::showFlash(); ?>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-lg-6">
            <button type="button" class="btn btn-primary tampilModalTambah" data-bs-toggle="modal" data-bs-target="#formModal">
                Tambah data mahasiswa
            </button>
        </div>
    </div>

    <div class="row mb-3">
        <div class="col-lg-6">
            <form method="post" action="<?= BASEURL; ?>/Mahasiswa/cari">
                <div class="input-group">
                    <input name="keyword" id="keyword" type="text" class="form-control" placeholder="Cari Mahasiswa" aria-label="Recipient's username" aria-describedby="button-addon2" autocomplete="off">
                    <button class="btn btn-primary" type="submit" id="cari">Cari</button>
                </div>
            </form>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-6">

            <h3 class="mt-3">Daftar Mahasiswa</h3>
            <?php foreach ($data['mhs'] as $mhs) : ?>
                <ul class="list-group">
                    <li class="list-group-item">
                        <?= $mhs['nama'] ?>
                        <a onclick="return confirm('Yakin?');" href="<?= BASEURL; ?>/Mahasiswa/hapus/<?= $mhs['id'] ?>" class="badge bg-danger rounded-pill float-end ms-2">Hapus</a>
                        <a href="<?= BASEURL; ?>/Mahasiswa/ubah/<?= $mhs['id'] ?>" class="badge bg-success rounded-pill float-end ms-2 tampilModalUbah" data-bs-toggle="modal" data-bs-target="#formModal" data-id="<?= $mhs['id']; ?>">Edit</a>
                        <a href="<?= BASEURL; ?>/Mahasiswa/detail/<?= $mhs['id'] ?>" class="badge bg-primary rounded-pill float-end ms-2">Detail</a>
                    </li>
                </ul>
            <?php endforeach; ?>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="judulModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="judulModalLabel">Tambah Data Mahasiswa</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <form action="<?= BASEURL; ?>/Mahasiswa/tambah" method="post">
                    <input type="hidden" name="id" id="id">
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama Mahasiswa</label>
                        <input name="nama" type="text" class="form-control" id="nama">
                    </div>
                    <div class="mb-3">
                        <label for="nrp" class="form-label">Nrp Mahasiswa</label>
                        <input name="nrp" type="number" class="form-control" id="nrp">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Mahasiswa</label>
                        <input name="email" type="Email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="jurusan">Jurusan Mahasiswa</label>
                        <select id="jurusan" name="jurusan" class="form-select" aria-label="Default select example">
                            <option selected>Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Kimia">Kimia</option>
                            <option value="Biologi">Biologi</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Akuntansi">Akuntansi</option>
                        </select>
                    </div>


                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Tambah Data</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>