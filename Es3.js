function calcola() {
    let stanza = document.getElementById("stanza").value;
    let stagione = document.getElementById("stagione").value;
    let giorni = parseInt(document.getElementById("giorni").value)
    let parcheggio = document.getElementById("parcheggio").value;
    let risposta;
    if (
        (stanza=="B" || stanza=="M" || stanza=="A") &&
        (stagione=="BS" || stagione=="MS" || stagione=="AS") &&
        (giorni>0)
    ) {
        let prezzog;
        let prezzo;

        if (stagione == "BS") {
            prezzog = 15;
        } else if (stagione == "MS") {
            prezzog = 20;
        } else {
            prezzog = 25;
        }
        if (stanza == "M") {
            prezzog += 15;
        } else if (stanza == "A") {
            prezzog += 30;
        }

        if (giorni <=2){
            prezzo = prezzog*giorni;
        } else if (giorni <=7) {
            prezzo = prezzog*giorni*0.75;
        } else {
            prezzo = prezzog*giorni*0.65;
        }
        if (parcheggio) {
            prezzo += 5*giorni;
        }
        risposta = "Totale: " + prezzo + "€";
    } else {
        risposta = "Input invalidi";
    }
    document.getElementById("output").innerHTML = risposta;
}