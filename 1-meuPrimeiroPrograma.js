console.log("TMNC primeiro programa em JS de 2022")

const idade = 26
const idadeDoComprador = 15
console.log(idade+2)
const nome = "Marcelo"
const sobrenome = "Meirelles de Carvalho"

console.log("Conversão de textos em números utilizando o parseInt")
console.log(parseInt("2") + parseInt("2"))

console.log(`meu nome é ${nome} ${sobrenome}`)

let contador = 1
contador += 1

console.log(contador)

console.log("Trabalhando com listas")
let cidades = new Array("RJ", "MG", "SP", "DF", "PA", "BA")
let cidades2 = ["RJ", "RJ", "GO", "MG"]

console.log(cidades)
console.log(cidades2)

cidades2.push("PI", "MA","PI", "MA","PI", "MA")
console.log(cidades2)

cidades2.splice(2,1)
console.log(cidades2)
//console.log(cidades2[2])

if (idadeDoComprador > 18){
    console.log("Comprador é MAIOR de idade")
    cidades2.splice(2,1)
    console.log(cidades2)
} else {
    console.log("Comprador é menor de idade. Não posso vender")
}

let i = 0
while (i < 3) {
    console.log(`valor de i: ${i}`)
    i +=1
}

i = 0
while (i < cidades2.length){
    if (cidades2[i] == "PI"){
        console.log(`Existe !!! está na posição ${i}`)
        break
        console.log("Passou aqui depois do break") // Nunca será executado pois está após o break
    }
    i += 1
}
