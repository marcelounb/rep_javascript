import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente("Zezim do pilão", 99100200399)
console.log(cliente1)

const cliente2 = new Cliente("Chica da Silva", 3453453344)
console.log(cliente2)

const contaCorrenteCliente1 = new ContaCorrente(0, 4882, cliente1)
const contaCorrenteCliente2 = new ContaCorrente(0, 2887, cliente2)


contaCorrenteCliente1.depositar(500.50)

const valorSacado = contaCorrenteCliente1.sacar(99)
contaCorrenteCliente1.sacar(999)
contaCorrenteCliente1.sacar(-100)
contaCorrenteCliente1.depositar(990000)
console.log(contaCorrenteCliente1)
console.log(contaCorrenteCliente2)

let valor = 300000
contaCorrenteCliente1.transferir(valor, contaCorrenteCliente2)

console.log(contaCorrenteCliente1)
console.log(contaCorrenteCliente2)

console.log("----------Poupança-----------")

const cliente3 = new Cliente("Mariazinha", 99900088877)
const cliente4 = new Cliente("Joaozinho", 99900000000)

const contaPoupanca1 = new ContaPoupanca(0, cliente3, 2887)
const contaPoupanca2 = new ContaPoupanca(0, cliente4, 1230)

console.log(contaPoupanca1)
console.log(contaPoupanca2)

contaPoupanca1.depositar(200)
contaPoupanca1.sacar(10)
contaPoupanca1.transferir(50, contaPoupanca2)

console.log(contaPoupanca1)
console.log(contaPoupanca2)


const cliente5 = new Cliente("Toffi", 77766677788)
const cliente6 = new Cliente("Papi", 22233344455)
console.log(Cliente.numeroClientes)
const conta1 = new Conta(0, cliente5, 1606)