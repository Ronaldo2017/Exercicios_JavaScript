/* let litros = 0
let comb = ''
let din = ''

class PostoGasolina {
    constructor() {
        this.gasolina = 4.00
        this.alcool = 2.50
    }

    abastecer() {
        comb = prompt('Digite o combustível para abastecer: G/A')
        litros = Number(prompt('Digite a quantidade de litros'))
    }

    pagamento(){

        din = prompt('Qual a forma de pagamento? Dinheiro/Cartão')
        if (din === 'Dinheiro') {
            alert('Pagamento em Dinheiro')
        } else {
            alert('Pagamento em Cartão')
        }
    }

    resumo(litros){

        if (comb === 'Gasolina') {
            this.litros = litros * this.gasolina
            document.write(`Combustível: ${comb} <br>`)
            document.write(`Quantidade de litros: ${litros} <br>`)
            document.write(`Valor a pagar: R$ ${this.litros}<br>`)
            document.write(`Forma de pagamento: ${din}`)
        } else if (comb === 'Álcool') {
            this.litros = litros * this.alcool
            document.write(`Combustível: ${comb} <br>`)
            document.write(`Quantidade de litros: ${litros} <br>`)
            document.write(`Valor a pagar: R$ ${this.litros}<br>`)
            document.write(`Forma de pagamento: ${din}`)
        } else {
            alert('Combustível inválido')
        }
    }
}

let posto = new PostoGasolina()

posto.abastecer()
posto.pagamento()
posto.resumo(litros)


 */

class Posto{
    constructor(){
        this.tipoCombustivel = ''
        this.qtdCombustivel = 0
        this.tipoPag = ''
        this.totalPagamento = 0
    }

    abastecer(){
        this.tipoCombustivel = prompt('Combustivel')
        this.qtdCombustivel = Number(prompt('Litros'))
        if(this.tipoCombustivel == 'g'){
            this.totalPagamento = this.qtdCombustivel * 4
            this.tipoCombustivel = 'Gasolina'
        }else if(this.tipoCombustivel == 'a'){
            this.totalPagamento = this.qtdCombustivel * 2.5
            this.tipoCombustivel = 'Álcool'
        }
    }

    pagamento(){
        this.tipoPag = prompt('D / C')
        if (this.tipoPag == 'd') {
            this.tipoPag = 'Dinheiro'
        } else {
            this.tipoPag = 'Cartão'
        }
    }

    ticket(){
        document.write(`Litros: ${this.qtdCombustivel} <br>`)
        document.write(`Combustível: ${this.tipoCombustivel} <br>`)
        document.write(`Pagamento: ${this.tipoPag} <br>`)
        document.write(`total: ${this.totalPagamento} <br>`)


    }
}

let p1 = new Posto()
p1.abastecer()
p1.pagamento()
p1.ticket()