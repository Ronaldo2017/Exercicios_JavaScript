function calcular() {

    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let masc = document.getElementById('masc')
    let fem = document.getElementById('fem')

    let valor = peso / (altura * altura)

    document.getElementById('res').value = valor.toFixed(1)

    if (masc && valor <= 20) {
        alert('Peso Demasiado Baixo!')
    } else if (masc && valor > 20 && valor <= 24.9) {
        alert('Peso Normar!')
    } else if (masc && valor >= 25 && valor <= 29.9) {
        alert('Excesso de Peso!')
    } else if (masc && valor >= 30 && valor <= 35.9) {
        alert('Obesidade Grau 1!')
    } else if (masc && valor >= 36 && valor <= 42) {
        alert('Obesidade Grau 2!')
    } else if (masc && valor > 43) {
        alert('Obesidade Grau 3(Ou Mórbida)!')
    }

    if (fem && valor <= 18.5) {
        alert('Peso Demasiado Baixo!')
    } else if (fem && valor <= 23.9) {
        alert('Peso Normar!')
    } else if (fem && valor <= 28.9) {
        alert('Excesso de Peso!')
    } else if (fem && valor <= 34.9) {
        alert('Obesidade Grau 1!')
    } else if (fem && valor <= 39.9) {
        alert('Obesidade Grau 2!')
    } else if (fem && valor > 40) {
        alert('Obesidade Grau 3(Ou Mórbida)!')
    }
}