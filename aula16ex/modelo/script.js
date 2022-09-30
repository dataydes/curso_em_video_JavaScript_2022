var num = []

function confere(n) {
    if (num.indexOf(n) == -1) {
        num.push(n)
    } else {
        window.alert('Número já cadastrado')
    }
}
function apresenta() {
    let resu = document.getElementById('selres')
    resu.innerHTML = ''
    for (let n in num) {
        let item = document.createElement('option')
        item.text = `Valor ${num[n]} adicionado`
        item.value = `selnum${n}`
        resu.appendChild(item)
    }
}

function adicionar() {
    let num = document.getElementById('txtnum')
    if (num.value == '' || num.value > 100 || num.value < 1) {
        window.alert('[ERRO] insira um valor válido!')
    } else {
        confere(num.value)
        apresenta()
    }
}

function finalizar() {
    var res = document.getElementById('res')
    let ordenado = num.sort()
    let index = ordenado.length
    let maior = ordenado[index]
    let menor = ordenado[0]
    let soma = 0
    for (let n in ordenado) {
        soma += ordenado
    }
    let media = soma % (index + 1)
    res.innerHTML = `<p>Ao todo, temos ${num.length} números cadastrados</p>
    <p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>A soma dos valores informados foi ${soma}.</p>
    <p>A média dos valores informados foi ${media}.</p>
    `
}

