function whilestatement() {
    var whstaawal = document.getElementById("whstaawal").value;
    var whstaakhir = document.getElementById("whstaakhir").value;
    while (whstaawal<=whstaakhir) {
        document.getElementById("while").innerHTML+=("Perulagan ke-"+whstaawal+++"<br/>");
    }
}