// Functional Execution Context
function functionalexecutioncontext () {
    var funexc = document.getElementById('funexc').value;
    var sayafunexc = funexc;
    functionalexecutioncontext2(sayafunexc);
}
function functionalexecutioncontext2(sayafunexc) {
    var hasilfunexc = document.getElementById('hasilfunexc');
    hasilfunexc.innerHTML = sayafunexc+" di dalam function ke-2";
}
functionalexecutioncontext ();
hasilfunexc.innerHTML = funexc+" hasil dari function globals";

// Simple Function
function simplefunction() {
    var simfunnama = document.getElementById('simfunnama').value;
    var simfununiv = document.getElementById('simfununiv').value;
    var simfunprodi = document.getElementById('simfunprodi').value;
    document.getElementById('hasilsimfun').innerHTML= "Nama Anda : "+simfunnama+"<br/> Nama Univ : "+simfununiv+"<br/> Prodi : "+simfunprodi;
}

// Function Parameter
function functionparameter(funparanama, funparaalamat) {
    var funparanama = document.getElementById('funparanama').value;
    var funparaalamat = document.getElementById('funparaalamat').value;
    var outputfunpara = "<tr>"+
                            "<td>"+funparanama+"</td>"+
                            "<td>"+funparaalamat+"</td>"+
                        "</tr>";
    var hasilbodyfunpara = document.getElementById('hasilbodyfunpara');
    hasilbodyfunpara.innerHTML +=outputfunpara;
}
functionparameter(funparanama, funparaalamat);

// Optional Parameter
function optparahitung (a,b,c) {
    let x = Number(a) + Number(b);
    let y = 1;
    y++;
    if (typeof c !== 'undefined') {
        x += Number(c);
        y++;
    }
    var average = x / y;
    return "The average is " + average;
}

function optionalparameter () {
    var optparan1 = document.getElementById('optparan1').value;
    var optparan2 = document.getElementById('optparan2').value;
    var outputoptpara = optparahitung(optparan1, optparan2,0);
    displayoptpara(outputoptpara);
}

function displayoptpara (outputoptpara) {
    var hasiloptpara = document.getElementById('hasiloptpara');
    hasiloptpara.textContent = outputoptpara;
}


// Default Parameter
function defaultparameter (namadefpara="Rizal") {
    var defpara = document.getElementById('defpara').textContent;
    var outputdefpara = document.getElementById('hasildefpara');
    outputdefpara.textContent = "Nama Saya "+namadefpara+", berumur "+defpara;

}

// Rest Parameter
function restparameter(...values) {
    let sumrespara = 0, inputrespara=0;
    for (let i = 0; i < values.length; i++) {
        sumrespara += values[i];
        inputrespara++;
    }
    const respara = sumrespara / inputrespara;
    document.getElementById("hasilrespara").textContent = `Hasil data rata nilai : ${respara}`;
}

// Function Return
function datafunret(funretnama, funretnim) {
    var datafunret = "Nama saya "+funretnama + " (" + funretnim+ ")";
    return datafunret;
  }
  
function functionreturn() {
    var funretnama = document.getElementById("funretnama").value;
    var funretnim = document.getElementById("funretnim").value;
    
    const fullnamefunret = datafunret(funretnama, funretnim);
    document.getElementById("hasilfunret").textContent = fullnamefunret;
  }
  

  // Tugas Study Kasus Function
  function hitungRataRata() {
    const tugas1 = parseInt(document.getElementById('tugas1').value);
    const tugas2 = parseInt(document.getElementById('tugas2').value);
    const tugas3 = parseInt(document.getElementById('tugas3').value);
    const tugas4 = parseInt(document.getElementById('tugas4').value);
    const tugas5 = parseInt(document.getElementById('tugas5').value);
  
    const nilaiSiswa = [tugas1, tugas2, tugas3, tugas4, tugas5];
  
    const rataRata = calculateAverage(nilaiSiswa);
    const status = determineStatus(rataRata);

    var outputtf = "<tr>"+
                        "<td>"+`${rataRata}`+"</td>"+
                        "<td>"+`${status}`+"</td>"+
                    "</tr>";
    var hasilbodytf = document.getElementById("hasilbodytf");
    hasilbodytf.innerHTML +=outputtf;
  }
  
  function calculateAverage(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i];
    }
    const average = sum / values.length;
    return average.toFixed(2);
  }
  
  function determineStatus(average) {
    if (average >= 85 && average <= 100) {
        return "Lulus"
    } else if (average >= 79 && average <= 84) {
        return "Lulus"
    } else if (average >= 74 && average <= 78) {
        return "Lulus"
    } else if (average >= 69 && average <= 73) {
        return "Lulus";
    } else if (average >= 64 && average <= 68) {
        return "Tidak Lulus";
    } else if (average >= 59 && average <= 63) {
        return "Tidak Lulus";
    } else if (average >= 54 && average <= 58) {
        return "Tidak Lulus";
    } else if (average >= 41 && average <= 53) {
        return "Tidak Lulus";
    } else if (average >=0 && average <= 40) {
        return "Tidak Lulus";
    }
      else if (average >=101 || average <=-1) {
        alert("Input nilai yang anda masukkan salah<br/> Harap Masukkan Nilai Yang Sesuai!!");
    }
  }
  