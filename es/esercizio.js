
let minDisplay = document.querySelector("#minuti")
let secDisplay = document.querySelector("#secondi")

let tempo = sessionStorage.getItem("timer") ? JSON.parse(sessionStorage.getItem("timer")) : {min: 0, sec:0}

secDisplay.innerHTML = tempo.sec
minDisplay.innerHTML = tempo.min


let timer = setInterval(()=>{
    tempo.sec++
    if(tempo.sec == 60){
        tempo.min++
        tempo.sec = 0
    }
    secDisplay.innerHTML = tempo.sec
    minDisplay.innerHTML = tempo.min
    console.log(tempo);
    sessionStorage.setItem("timer", JSON.stringify(tempo))
},1000);