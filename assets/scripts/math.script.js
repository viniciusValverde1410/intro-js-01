function soma() {
    let num = Number(document.getElementById("num").value);
    
    let result = num + 1
    
    document.getElementById("result").innerText = result;
}

function sub() {
    let num = Number(document.getElementById("num").value);
    
    let result = num - 1
    
    document.getElementById("result").innerText = result;
}

function reseta() {
    let num = Number(document.getElementById("num").value);

    let result = num * 0
    
    document.getElementById("result").innerText = result;
}