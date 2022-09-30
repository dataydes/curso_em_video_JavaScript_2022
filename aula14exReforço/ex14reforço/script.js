function calcular() {
    var num = document.getElementById('txtnum')
    var sel = document.getElementById('selnum')

    if (num.value == '') {
        window.alert('[ERRO], insira um número!')
    }
    else {
        sel.innerHTML = ''
        for (var n = 1; n <= 10; n++) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${n} = ${num.value * n}`
            item.value = `sel${n}`
            sel.appendChild(item)

        }
    }
}
function limpar() {
    var num = document.getElementById('txtnum')
    var sel = document.getElementById('selnum')
    num.value = ''
    sel.innerHTML = ''
    let item = document.createElement('option')
    item.text = 'Insira um número!'
    item.value = 'selnum3'
    sel.appendChild(item)
}
