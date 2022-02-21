export class Cliente{
    nome
    cpf
    static numeroClientes = 0

    constructor(nome, cpf){
        this.nome = nome
        this.cpf = cpf
        Cliente.numeroClientes++
    }
}