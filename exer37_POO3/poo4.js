 class Caixa {
     constructor(){
         this.saldo = 1000
     }

     sacar(valor){
        this.saldo = this.saldo - valor
        return this.saldo
     }

     depositar(valor){
         this.saldo = this.saldo + valor
         return this.saldo
     }
 }

 let caixa = new Caixa()

 caixa.depositar(500) 
 caixa.sacar(250)

 alert(`O saldo do caixa é: ${caixa.saldo}`)