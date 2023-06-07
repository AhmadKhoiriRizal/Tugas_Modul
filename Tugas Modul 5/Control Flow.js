// Conditional Statements
function conditionalstatements() {
    var ConSta = document.getElementById("ConSta").value;
    if (ConSta==5) {
        alert("Jawaban Anda Benar")
    }
    else {
        alert("Jawaban Anda Salah")
    }
}

// Tenary Operator
function tenaryoperator() {
    var tenary = document.getElementById("tenary").value;
    var umur = (tenary>19) ? 'Dewasa' : 'Remaja';
    alert('Umur Anda tergolong dalam kategori '+umur);
}

// Multiconditional Statement
function multiconditionalstatement() {
    var mulsta = document.getElementById("mulsta").value;
    if (mulsta>=90 && mulsta<=100) {
        alert("Nilai Yang Bagus, Terus Belajar ya!!");
    } else if (mulsta>=80 && mulsta<=89) {
        alert("Sudah Bagus, Tapi Tingkatkan Lagi ya!!");
    } else if (mulsta>=74 && mulsta<=79) {
        alert("Minta Bantuan Teman Kamu Menjelaskan Juga Bagus!");
    } else if (mulsta>=0 && mulsta<=72) {
        alert("Belajar Lagi Dan Jangan SKS Materi Lagi ya!!");
    } else if (mulsta==73) {
        alert("Mau Remidi Apa Enggak?, Nilai Udah Pas Tuh!")
    } else {
        alert("Masukkan Angka Yang Benar");
    }
}

// Switch Style
function switchstyle() {
    var swst = document.getElementById("swst").value;
    switch (swst) {
        case 'Lapar','lapar','LAPAR','1':
            alert("Sama Aku Juga Lapar");            
            break;
        case 'Enggak','enggak','ENGGAK','2':
            alert("Tapi Aku Lapar, Belum Makan");
            break;
        case 'Lumayan','lumayan','LUMAYAN','3':
            alert("Yuk Cari Tempat Makan!");
            break;
        default:
            alert('Input Males Menjawab Pertanyaan Kamu!');
            break;
    }
}

// Tugas Study Kasus
function tugascontrolflow() {
    var TCFProdi = document.getElementById('TCFProdi').value;
    var TCFTahun = document.getElementById('TCFTahun').value;
    switch (TCFTahun) {
        case '2018':
            if (TCFProdi==1) {
                alert('Membaca Jus 1 - 15')
            } else if (TCFProdi==2) {
                alert('Membaca Jus 16 - 30')
            } else {
                alert('input error');
            }
            break;
        case '2020':
            if (TCFProdi==1) {
                var ABI = prompt('Input Kelas A/B/C : ');
                if (ABI=='A'||ABI=='a') {
                    alert('Membaca Jus 1 - 15')
                } else if (ABI=='B'||ABI=='b') {
                    alert('Membaca Jus 16 - 30')
                } else {
                    alert('input error');
                }
            } else if (TCFProdi==2) {
                alert('Membaca Jus 1 - 15')
            } else {
                alert('input error');
            }
            break;
        case '2022':
            if (TCFProdi==1) {
                var ABI = prompt('Input Kelas A/B/C : ');
                if (ABI=='A'||ABI=='a') {
                    alert('Membaca Jus 1 - 15')
                } else if (ABI=='B'||ABI=='b') {
                    alert('Membaca Jus 16 - 30')
                } else if (ABI=='C'||ABI=='c') {
                    alert('Membaca Jus 1 - 15')
                } else {
                    alert('input error');
                }
            } else if (TCFProdi==2) {
                var RPL = prompt('Input Kelas A/B/C : ');
                if (RPL=='A'||RPL=='a') {
                    alert('Membaca Jus 16 - 30')
                } else if (RPL=='B'||RPL=='b') {
                    alert('Membaca Jus 1 - 15')
                } else {
                    alert('input error');
                }
            } else if (TCFProdi==3) {
                alert('Membaca Jus 16 - 25');
            } else {
                alert('input error');
            }
            break;
        default:
            alert('Masukkan Tahun Dengan Benar');
            break;
    }
}