
var dataOdierna = new Date ();
console.log(dataOdierna);

let giorno = document.getElementById('giornoAttuale');


let altro = document.getElementsByName('giorno');

if(giorno.onclick){
    alert(dataOdierna);
}else if(altro){
    onclick = alert;
    alert('Errore');
}


