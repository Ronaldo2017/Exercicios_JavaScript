class Alunos{
    constructor(){
        this.matricula = 0
        this.nome = ''
        this.nota1 = 0
        this.nota2 = 0
        this.trabalho = 0
        this.media = 0
    }

    dados(){
        this.nome = prompt('Digite seu nome')
        this.matricula = Number(prompt('Digite a matricula'))
        this.nota1 = Number(prompt('Digite a primeira nota'))
        this.nota2 = Number(prompt('Digite a segunda nota'))
        this.trabalho = Number(prompt('Digite a nota do trabalho'))
    }

    medias(){
        this.media = (this.nota1 + this.nota2 + this.trabalho) / 3
        document.write(`Nome: ${this.nome} <br> Matrícula: ${this.matricula} <br> média: ${this.media.toFixed(2)} <br>`)
    }

    resultado(){
        if (this.media >= 7) {
            document.write('APROVADO')
        } else {
            document.write('REPROVADO')
        }
    }
}



let aluno = new Alunos()

aluno.dados()
aluno.medias()
aluno.resultado()