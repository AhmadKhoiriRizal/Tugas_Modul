var show = document.getElementById("nav-links");
function showMenu(){
    show.style.right = "0";
}
function closeMenu(){
    show.style.right = "-200px";
}
var datanama = [];
var datatanggal =[];
var datamerekhp =[];

function addData() {
  var inputnama = document.getElementById('namaMhs');
  var nama = inputnama.value;
  var inputtanggal =document.getElementById('tglLahir');
  var tanggal = inputtanggal.value;
  var inputmerekhp =document.getElementById('merekHP');
  var merekhp = inputmerekhp.value;

  if (nama !== '') {
    datanama.push(nama);
    inputnama.value = '';
    displayData();
  }
  if (tanggal !== '') {
    datatanggal.push(tanggal);
    inputtanggal.value = '';
    displayData();
  }
  if (merekhp !== '') {
    datamerekhp.push(merekhp);
    inputmerekhp.value = '';
    displayData();
  }
}
function performUnshift() {
    var newDatanama = prompt('Masukkan data Nama Mahasiswa:');
    var newDatatanggal = prompt('Masukkan data tanggal lahir Mahasiswa:');
    var newDatamerekhp = prompt('Masukkan data merek HP Mahasiswa:');
  
    if (newDatanama !== null) {
      datanama.unshift(newDatanama);
      displayData();
    }
    if (newDatatanggal !== null) {
      datatanggal.unshift(newDatatanggal);
      displayData();
    }
    if (newDatamerekhp !== null) {
      datamerekhp.unshift(newDatamerekhp);
      displayData();
    }
  }

function displayData() {
  var outputBody = document.getElementById('outputBody');
  outputBody.innerHTML = '';
    
  for (var i = 0; i < datanama.length; i++) {
    var row = document.createElement('tr');

    var Cellnama = document.createElement('td');
    Cellnama.textContent = datanama[i];
    row.appendChild(Cellnama);

    var Celltanggal = document.createElement('td');
    Celltanggal.textContent = datatanggal[i];
    row.appendChild(Celltanggal);

    var Cellmerekhp = document.createElement('td');
    Cellmerekhp.textContent = datamerekhp[i];
    row.appendChild(Cellmerekhp);

    var actionCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('onclick', 'deleteData(' + i + ')');
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    outputBody.appendChild(row);
  }
}

function deleteData(index) {
  datanama.splice(index, 1);
  displayData();
}

function performPush() {
  var newDatanama = prompt('Masukkan data Nama Mahasiswa:');
  var newDatatanggal = prompt('Masukkan data tanggal lahir Mahasiswa:');
  var newDatamerekhp = prompt('Masukkan data merek HP Mahasiswa:');
  if (newDatanama !== null) {
    datanama.push(newDatanama);
    displayData();
  }
  if (newDatatanggal !== null) {
    datatanggal.push(newDatatanggal);
    displayData();
  }
  if (newDatamerekhp !== null) {
    datamerekhp.push(newDatamerekhp);
    displayData();
  }
}

function performPop() {
  if (datanama.length > 0) {
    datanama.pop();
    datatanggal.pop();
    datamerekhp.pop();   
    displayData();
  } else {
    alert('Tidak ada data array \nMasukkan Data Array Yang Baru');
  }
}

function performSplice() {
  if (datanama.length > 0) {
    var index = prompt('Masukkan index numor yang akan dihapus:');
    var deleteCount = prompt('Masukkan berapa kali data akan di hapus:');

    if (index !== null && deleteCount !== null) {
      index = parseInt(index);
      deleteCount = parseInt(deleteCount);

      datanama.splice(index, deleteCount);
      displayData();
    }
  } else {
    alert('Tidak ada data array \nMasukkan Data Array Yang Baru');
  }
}

// Menampilkan data awal
displayData();
