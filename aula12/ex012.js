var idade = 23
console.log(`você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Vota opcional')
} else {
    console.log('Voto obrigatório')
}

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Boa magrudaga!')
}