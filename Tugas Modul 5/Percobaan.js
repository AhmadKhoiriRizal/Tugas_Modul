// Fungsi untuk menghitung rata-rata nilai
function calculateAverage(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i];
    }
    const average = sum / values.length;
    return average;
  }
  
  // Fungsi untuk menentukan status kelulusan
  function determineStatus(average) {
    if (average >= 75) {
      return "Lulus";
    } else {
      return "Tidak Lulus";
    }
  }
  
  // Contoh data nilai siswa
  const nilaiSiswa = [80, 70, 90, 65, 85];
  
  // Menghitung rata-rata nilai
  const rataRata = calculateAverage(nilaiSiswa);
  
  // Menentukan status kelulusan
  const status = determineStatus(rataRata);
  
  // Menampilkan hasil
  console.log("Nilai Siswa:", nilaiSiswa);
  console.log("Rata-rata Nilai:", rataRata);
  console.log("Status Kelulusan:", status);
  