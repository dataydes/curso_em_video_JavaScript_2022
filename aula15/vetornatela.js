let valores = [8,1,2,6,4,6]
console.log(valores)
for(let indice = 0; indice < valores.length; indice++){
    console.log(`A posição ${indice} tem o valor ${valores[indice]}`)
}

for (let pos in valores){//para cada posição(pos) em valores mostre a variaável, essa sintaxe só funciona para arrays e objetos.
    console.log(valores[pos])
}