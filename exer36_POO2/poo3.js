class Calculadora {
    constructor() {
        this.resultado = 3
    }

    somar(valor) {
        this.resultado = this.resultado + valor
        return this.resultado
    }

    subtrair(valor) {
        this.resultado = this.resultado - valor
        return this.resultado
    }

    multiplicacao(valor) {
        this.resultado = this.resultado * valor
        return this.resultado
    }

    dividir(valor) {
        this.resultado = this.resultado / valor
        return this.resultado
    }

    mostrarResultado() {
        this.somar(5)
        alert('A soma é: ' + this.resultado)

        this.subtrair(2)
        alert('A subtração é: ' + this.resultado)

        this.multiplicacao(3)
        alert('A multiplicação é: ' + this.resultado)

        this.dividir(2)
        alert('A divisão é: ' + this.resultado)
    }

}

let calcular = new Calculadora()

calcular.mostrarResultado()



