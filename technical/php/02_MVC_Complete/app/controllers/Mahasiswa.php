<?php
class Mahasiswa extends Controller {
    public function index() {
        $data['judul'] = "Daftar Mahasiswa";
        $data['mhs'] = $this->model('Mahasiswa_model')->getAll();
        $this->view('templates/header', $data);
        $this->view('mahasiswa/index', $data);
        $this->view('templates/footer');
    }

    public function detail($id) {
        $data['judul'] = "Detail Mahasiswa";
        $data['mhs'] = $this->model('Mahasiswa_model')->getById($id);
        $this->view('templates/header', $data);
        $this->view('mahasiswa/detail', $data);
        $this->view('templates/footer');
    }

    public function tambah() {
        // tambah data dan cek apakah data masuk
        if ($this->model('Mahasiswa_model')->tambahData($_POST) > 0) {
            Flasher::setFlash("berhasil", "ditambahkan", "success");
            header('Location: ' . BASEURL . '/Mahasiswa');
            exit;
        } else {
            Flasher::setFlash("gagal", "diubah", "danger");
            header('Location: ' . BASEURL . '/Mahasiswa');
            exit;
        }
    }

    public function hapus($id) {
        // tambah data dan cek apakah data masuk
        if ($this->model('Mahasiswa_model')->hapusData($id) > 0) {
            Flasher::setFlash("berhasil", "dihapus", "success");
            header('Location: ' . BASEURL . '/Mahasiswa');
            exit;
        } else {
            Flasher::setFlash("gagal", "dihapus", "danger");
            header('Location: ' . BASEURL . '/Mahasiswa');
            exit;
        }
    }
    
    public function getubah() {
        echo json_encode($this->model('Mahasiswa_model')->getById($_POST['id']));
    }

    public function ubah(){
        if ($this->model('Mahasiswa_model')->ubahData($_POST) > 0) {
            Flasher::setFlash("berhasil", "diubah", "success");
            header('Location: ' . BASEURL . '/Mahasiswa');
            exit;
        } else {
            Flasher::setFlash("gagal", "diubah", "danger");
            header('Location: ' . BASEURL . '/Mahasiswa');
            exit;
        }
    }

    public function cari(){
        $data['judul'] = "Daftar Mahasiswa";
        $data['mhs'] = $this->model('Mahasiswa_model')->cariData();
        $this->view('templates/header', $data);
        $this->view('mahasiswa/index', $data);
        $this->view('templates/footer');
    }
}
