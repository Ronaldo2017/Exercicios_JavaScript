class Calculos {
    constructor(a, b){
        this.x = Number(a)
        this.y = Number(b)
        this.resultado = 0
    }

    somar(){
        alert('A soma é: ' + (this.x + this.y))
    }

    subtrair(){
        this.resultado = this.x - this.y
        alert('A subtração é ' + this.resultado)
    }

}

let calcular = new Calculos(40,20)


calcular.somar()
calcular.subtrair()


