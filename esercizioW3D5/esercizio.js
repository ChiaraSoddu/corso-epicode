alert("Ciao, facciamo qualche calcolo insieme!")

function n(dato){ 
    document.getElementById("schermo").value+=dato;
 }

 function del() { 
  document.getElementById("schermo").value=""; 
 } 
 
 function calcolo() { 
 document.getElementById("schermo").value=eval(document.getElementById("schermo").value); 
 }