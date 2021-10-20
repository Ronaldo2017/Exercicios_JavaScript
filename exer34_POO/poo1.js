class Pessoa {
    constructor(){
        this.nome = ''
        this.rg   = ''
        this.cpf  = ''
    }
   
    dizer(){
        alert(`${this.nome}, Olá`)
    }

    andar(){
        alert(`${this.nome}, Andooouuu`)
    }

}

let pessoa1 = new Pessoa()
pessoa1.nome = 'Ronaldo'
pessoa1.rg = '13243.454'
pessoa1.cpf = '12155451-45'

pessoa1.dizer()
pessoa1.andar()

alert(`${pessoa1.nome} com o CPF: ${pessoa1.cpf} \ne rg: ${pessoa1.rg} \né DESENVOLVEDOR WEB`)

let pessoa2 = new Pessoa()
pessoa2.nome = 'Ronaldo'
pessoa2.rg = '121324-90'
pessoa2.cpf = '2435346543.89'
pessoa2.dizer()
pessoa2.andar()

alert(`${pessoa2.nome} com o CPF: ${pessoa2.cpf} \ne rg: ${pessoa2.rg} \n começa em janeiro de 2022`)
