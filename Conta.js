export class Conta{

    constructor(saldoinicial, cliente, agencia){
        this._saldo = saldoinicial
        this._cliente = cliente
        this._agencia = agencia
    }

    sacar(valor){
        if (valor >= 0) {
            if(this._saldo >= valor){
                this._saldo -= valor
                console.log(`Novo saldo de R$${this._saldo.toFixed(2)}`)
                return valor
            }else{
                console.log(`Saldo insuficiente para realizar o saque. Cliente possui apenas R$${this._saldo.toFixed(2)}`)
                return 0
            } 
        } else {
            console.log("Negado. Valor negativo.")
            return 0
        }
    }
    
    depositar(valor){
        if (valor >= 0) {
            this._saldo += valor
            return valor
        } else {
            console.log("Negado. Valor negativo.")
            return 0
        } 
        console.log(`Novo saldo de R$${this._saldo.toFixed(2)}`)
    }

    transferir(valor, conta){
        const valortransferencia = this.sacar(valor)
        conta.depositar(valortransferencia)
    }
}