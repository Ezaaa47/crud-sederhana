let namaList = [];

function render() {
  const daftar = document.getElementById("daftarNama");
  daftar.innerHTML = "";

  namaList.forEach((nama, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${nama}
      <span>
        <button onclick="editNama(${index})">Edit</button>
        <button onclick="hapusNama(${index})" style="background:red;">Hapus</button>
      </span>
    `;
    daftar.appendChild(li);
  });
}

function tambahNama() {
  const input = document.getElementById("inputNama");
  const nama = input.value.trim();
  if (nama) {
    namaList.push(nama);
    input.value = "";
    render();
  }
}

function hapusNama(index) {
  if (confirm("Yakin ingin menghapus?")) {
    namaList.splice(index, 1);
    render();
  }
}

function editNama(index) {
  const namaBaru = prompt("Edit nama:", namaList[index]);
  if (namaBaru !== null && namaBaru.trim() !== "") {
    namaList[index] = namaBaru.trim();
    render();
  }
}

render();
