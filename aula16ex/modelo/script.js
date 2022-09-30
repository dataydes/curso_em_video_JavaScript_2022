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
    let nume = document.getElementById('txtnum')
    if (nume.value == '' || nume.value > 100 || nume.value < 1) {
        window.alert('[ERRO] insira um valor válido!')
    } else {
        confere(nume.value)
        apresenta()
        nume.value = ''
        nume.focus()
        res.innerHTML = ''
    }
}

function finalizar() {
    var res = document.getElementById('res')
    let ordenado = num.sort()
    let index = ordenado.length
    let maior = ordenado[index - 1]
    let menor = ordenado[0]
    let soma = 0
    for (let n in ordenado) {
        soma += Number(ordenado[n])
    }
    let media = soma / (index)
    res.innerHTML = `<p>Ao todo, temos ${num.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores informados foi ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores informados foi ${media}.</p>`

}

