function calcola() {
    let mesi = parseInt(document.getElementById("mesi").value);
    let sesso = document.getElementById("sesso").value;
    let fascia = parseInt(document.getElementById("fascia").value);
    let risposta;
    if (mesi>0 && (sesso=="M" || sesso=="F") && (fascia==1 || fascia==2)) {
        if (sesso=="M"){
            risposta = "Il prezzo è " + (fascia==1 ? 10 : 15)*mesi;
        } else {
            risposta = "Il prezzo è " + (fascia==1 ? 7 : 11)*mesi;
        }
    } else {
        risposta = "Input invalidi"
    }
    document.getElementById("output").innerHTML = risposta;
}