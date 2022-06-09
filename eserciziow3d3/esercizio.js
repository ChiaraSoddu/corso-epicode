//////// funzione 1
var saluto = "Gooooodmorning ";
var oggetto = "Vietnam";

function saluti(saluto, oggetto) {
    var z = saluto + oggetto;
    return z;
}

var risultato = saluti(saluto, oggetto)

console.log(risultato)
//////////funzione 2
function smoothie(banane, fragole) {
    const frullato = `Smoothie con ${banane} banane e ${fragole} fragole`;
    return frullato;
}

console.log(smoothie(5, 10));

let Frullatobanana = smoothie(3);
console.log(Frullatobanana);
let Frullatofragole = smoothie(0, 10);
console.log(Frullatofragole);
//////////funzione 3
function età(compleanno) {
    return 2022 - compleanno;
}

alert(età(2002));

const anni = età(2002);
console.log(anni);
/////////// funzione 4

const età2 = compleanno => 2022 - compleanno;

let anni2 = età2(2000);
console.log(anni2);

/////////// funzione 5

const pensionamento = (compleanno, nome) => {
    const età3 = 2022 - compleanno;
    const anniPensione = 65 - età3;
    return `${nome} va in pensione tra ${anniPensione} anni`;
}

console.log(pensionamento(2002, "Chiara"));
console.log(pensionamento(2000, "Luca"));

///////// funzione 6

const calcoloSpesa = function(conto) {
    return conto >= 50 && conto <= 300 ? conto * 0.15 : conto * 0.2;
}

console.log(calcoloSpesa(320));

//////// funzione 7
function tagliaFette(torta) {
    return torta * 3;
}
function scegliTorta(mela, arancia) {
    const fetteMela = tagliaFette(mela);
    const fetteArancia = tagliaFette(arancia);

    const torta = `Torta con ${fetteMela} fette di mela e ${fetteArancia} fette di arancia.`;
    return torta;
}

console.log(scegliTorta(3, 5));

