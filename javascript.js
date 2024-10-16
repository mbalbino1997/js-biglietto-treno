const kmNumber = Math.round(parseInt(prompt("Inserisci il numero di km da percorrere")));
const userAge = parseInt(prompt("Inserisci la tua età"));
const ticketPrice = 0.21*kmNumber;
let discount = 0;
if ((isNaN(kmNumber) || isNaN(userAge)) || (kmNumber<0 || userAge<0)) {
    console.log("L'età e la distanza devono essere numeri maggiori di 0");
} else {
    if ( userAge < 18 ) {
        console.log("I minorenni hanno diritto ad uno sconto del 20%");
        discount = ticketPrice*0.2;
    } else if ( userAge > 65 ) {
        console.log("Gli over 65 hanno diritto ad uno sconto del 40%");
        discount = ticketPrice*0.4;
    } else {
        console.log("Non hai diritto allo sconto");
    
    }

    const finalPrice = ticketPrice-discount;
    const finalPriceFormatted = new Intl.NumberFormat('it-IT', {
        style: 'currency', currency: 'EUR',
    }).format(finalPrice);
    console.log('Il prezzo finale da pagare per il biglietto è: '+ finalPriceFormatted);
}