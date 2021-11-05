const keyword = document.getElementById("keyword");
const tombolCari = document.getElementById("tombol-cari");
const container = document.getElementById("container");

// tombolCari.addEventListener('click', (event) => {
//     alert('Oke!')
// })

function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}

keyword.addEventListener(
  "keyup",
  delay(function (event) {
    //   console.log(keyword.value);

    //   buat object ajax
    var xhr = new XMLHttpRequest();

    //  cek kesiapan ajax
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        container.innerHTML = xhr.responseText;
      }
    };

    // eksekusi ajax
    xhr.open("GET", `ajax/mahasiswa.php?keyword=${keyword.value}`, true);
    xhr.send();
  }, 500)
);
