$(function () {
  $(".tampilModalTambah").on("click", function () {
    $("#judulModalLabel").html("Tambah data mahasiswa");
    $(".modal-footer button[type=submit]").html("Tambah data");
  });

  $(".tampilModalUbah").on("click", function () {
    $("#judulModalLabel").html("Ubah data mahasiswa");
    $(".modal-footer button[type=submit]").html("Ubah data");
    $(".modal-body form").attr(
      "action",
      "http://localhost/learn/02_MVC/public/Mahasiswa/ubah"
    );

    const id = $(this).data("id");

    // get data mahasiswa yang mau diubah dan ganti isi modal
    $.ajax({
      url: "http://localhost/learn/02_MVC/public/Mahasiswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nrp").val(data.nrp);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});
