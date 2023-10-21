function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('Você não preencheu algum campo. Preencha todos para poder calcular.')
    } else if(pas.value == "0"){
        alert('Numero de passos não foi aceito. Considerando 1.')
        pas.value = "1"
    } else{
        res.innerHTML = 'Resultado: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        for(let c = i; c < f; c += p){
            // c= contador
            res.innerHTML += `${c}  <span class="emoj">\u{1F449}</span>`
        }
    }
    res.innerHTML += `  \u{1F3C1}`
}