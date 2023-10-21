let num = document.querySelector('#num')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function inlista(n, i){
    if (i.indexOf(Number(n)) != -1){
        // -1 = valor não encontrado na lista
        // [mesmo] -- se x for diferente de não estar na lista (se ele estiver na lista)...
        return true
    } else{
        return false
    }
}
function isnum(n){
    if (n >= 1 && n <= 100){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(!inlista(num.value, valores) && isnum(num.value)){
        // a ! antes da inlista quer dizer que ela NÃO está na lista .
        // [mesmo] -- se ele for diferente de não estar na lista...
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else{
        alert("Valor invalido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / tot

    res.innerHTML = ''
    res.innerHTML += `<p>A media dos números é ${media}</p>`
    res.innerHTML += `<p>O número de itens na lista é ${tot}</p>`
    res.innerHTML += `<p>O maior número é o ${maior}.</p>`
    res.innerHTML += `<p>O menor número é o ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os números é ${soma}.</p>`
}