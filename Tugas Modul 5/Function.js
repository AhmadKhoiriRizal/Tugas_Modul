// Functional Execution Context
function functionalexecutioncontext () {
    var funexc = document.getElementById('funexc').value;
    var hasilfunexc = document.getElementById('hasilfunexc').innerHTML;
    functionalexecutioncontext2();
    hasilfunexc.innerHTML = funexc+" di dalam function ke-1";
}
function functionalexecutioncontext2() {
    var funexc = document.getElementById('funexc').value;
    hasilfunexc.innerHTML = funexc+" di dalam function ke-2";
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
    var outputoptpara = optparahitung(optparan1, optparan2);
    displayoptpara(outputoptpara);
}

function displayoptpara (outputoptpara) {
    var hasiloptpara = document.getElementById('hasiloptpara');
    hasiloptpara.textContent = outputoptpara;
}


// Default Parameter
function defaultparameter (namadefpara="Rizal") {
    var defpara = document.getElementById('defpara').value;
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
  