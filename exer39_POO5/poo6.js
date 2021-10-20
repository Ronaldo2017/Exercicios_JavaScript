class Animal {
    constructor() {
        this.raca = ''
        this.cor = ''
        this.porte = ''
        this.passos = 0
        this.alimentado = false

    }

    alimentar(){        
        this.passos = 0
        this.alimentado = true
    }

    andar() {
        if (this.alimentado  && this.passos < 100) {
            this.passos++
            alert(`Andou: ${this.passos} passos!`)
        } else {  
            alert('O animal deve ser alimentado para poder andar')
        }
    }
}

class Cachorro extends Animal {

    constructor() {
        super(...arguments)
    }

    latir() {
        alert('AUAU')
    }
}

class Gato extends Animal {
    constructor() {
        super(...arguments)
    }

    miar() {
        alert('MIAU')
    }
}

let cachorro = new Cachorro()

cachorro.raca = 'PUDDLE'
cachorro.porte = 'PEQUENO'
cachorro.cor = 'BRANCO'

alert(`Cachorro: ${cachorro.raca} - Porte: ${cachorro.porte} - Cor: ${cachorro.cor}`)
cachorro.latir()
cachorro.alimentar()
cachorro.andar()
cachorro.andar()
cachorro.andar()
cachorro.andar()

let gato = new Gato()

gato.cor = 'MARRON'
gato.porte = 'PEQUENO'
gato.raca = 'SIAMES'
alert(`Gato: ${gato.raca} - Porte: ${gato.porte} - Cor: ${gato.cor}`)
gato.miar()
cachorro.alimentar()
gato.andar()
gato.andar()
gato.andar()
gato.andar()



