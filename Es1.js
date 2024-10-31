function calcola() {
    let reddito = parseInt(document.getElementById("risposta").value);
    let risposta;
    if (!isNaN(reddito) && reddito>=0){
        let tasse;
        if (reddito<=15000) {
            tasse = Math.max(0, reddito-3000)*0.23;
        } else if (reddito <= 28000) {
            tasse = 3450 + Math.max(0, reddito-15000)*0.27;
        } else if (reddito <= 55000) {
            tasse = 6960 + Math.max(0, reddito-28000)*0.38;
        } else if (reddito <= 75000) {
            tasse = 17220 + Math.max(0, reddito-55000)*0.41;
        } else {
            tasse = 25420 + Math.max(0, reddito-75000)*0.43;
        }
        risposta = `Le tasse sono di ${tasse} euro sui tuoi ${reddito} euro`;
    } else {
        risposta = "Input errato";
    }
    document.getElementById("output").innerHTML = risposta;

}