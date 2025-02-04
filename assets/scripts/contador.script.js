function aumenta() {
    let contador = Number(document.getElementById("contador").innerText);
    document.getElementById("contador").innerHTML = contador +1;
};

function sub (){
    let contador = Number(document.getElementById("contador").innerText);
    document.getElementById("contador").innerHTML = contador -1;
}

function reseta (){
    document.getElementById("contador").innerHTML = 0;  
}