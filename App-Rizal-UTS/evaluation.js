var show = document.getElementById("nav-links");
function showMenu(){
    show.style.right = "0";
}
function closeMenu(){
    show.style.right = "-200px";
}
function tampilNilai() {
  var nim = document.getElementById('nim').value;
  var nama = document.getElementById('nama').value;
  var nilaiAkhir = parseInt(document.getElementById('nilai').value);
  var mataKuliah = document.getElementById('mataKuliah').value;

  if (nilaiAkhir >= 85 && nilaiAkhir <= 100) {
    nilai = 'A';
    indeksNilai = '4.00';
  } else if (nilaiAkhir >= 79 && nilaiAkhir <= 84) {
    nilai = 'A-';
    indeksNilai = '3.67';
  } else if (nilaiAkhir >= 74 && nilaiAkhir <= 78) {
    nilai = 'B+';
    indeksNilai = '3.33';
  } else if (nilaiAkhir >= 69 && nilaiAkhir <= 73) {
    nilai = 'B';
    indeksNilai = '3.00';
  } else if (nilaiAkhir >= 64 && nilaiAkhir <= 68) {
    nilai = 'B-';
    indeksNilai = '2.67';
  } else if (nilaiAkhir >= 59 && nilaiAkhir <= 63) {
    nilai = 'C+';
    indeksNilai = '2.33';
  } else if (nilaiAkhir >= 54 && nilaiAkhir <= 58) {
    nilai = 'C';
    indeksNilai = '2.00';
  } else if (nilaiAkhir >= 41 && nilaiAkhir <= 53) {
    nilai = 'D';
    indeksNilai = '1.00';
  } else if (nilaiAkhir >=0 && nilaiAkhir <= 40) {
    nilai = 'E';
    indeksNilai = '0.00';
  }
  else if (nilaiAkhir >=101 || nilaiAkhir <=-1) {
    alert("Input nilai yang anda masukkan salah<br/> Harap Masukkan Nilai Yang Sesuai!!");
  }


  var hasilRow = "<tr>" +
                 "<td>" + nim + "</td>" +
                 "<td>" + nama + "</td>" +
                 "<td>" + nilaiAkhir + "</td>" +
                 "<td>" + mataKuliah + "</td>" +
                 "<td>" + nilai + "</td>" +
                 "<td>" + indeksNilai + "</td>" +
                 "<td><button class='deleteButton' onclick='hapusData(this)'>Hapus</button></td>" +
                 "</tr>";

  var hasilBody = document.getElementById('hasilBody');
  hasilBody.innerHTML += hasilRow;
  
 document.getElementById('nim').value=null;
 document.getElementById('nama').value=null;
 document.getElementById('nilai').value=null;
 document.getElementById('mataKuliah').value='Pilih';
}

function resetForm() {
  document.getElementById('nilaiForm').reset();
  document.getElementById('hasilBody').innerHTML = '';
}
function hapusData(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}