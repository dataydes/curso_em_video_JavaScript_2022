function contar() {
    var inicio = window.document.getElementById('txtNumInicio')
    var fim = window.document.getElementById('txtNumFim')
    var passo = window.document.getElementById('txtNumPasso')
    var res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Imposssível contar`
        window.alert('[Erro] faltam dados')
    } else {
        res.innerHTML = `contando... <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            passo.innerHTML = `1`
            window.alert('Passo inválido! considerando passo 1')
            p = 1
            
        }
        if (i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F603} `
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F603} `
            }
        }
        res.innerHTML += `\u{1F3C1} `
    }
}
