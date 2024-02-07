let resposta = document.getElementById('resposta')
console.log(resposta)

function calculaF(){
    let C = Number(document.getElementById('C').value)
    console.log(C)

    let F = (C * 1.8) + 32
    console.log("Valor " + F.toFixed(2))
    resposta.innerHTML = "É igual a: " + F.toFixed(2)
}