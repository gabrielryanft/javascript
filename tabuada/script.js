function clicar(){
    let num = document.getElementById('num')
    let tabua = document.getElementById('tabua')

    if (num.value.length == 0){
        alert('É necessario ao menos um número para fazer a tabuada')
    } else{
        let n = Number(num.value)
        tabua.innerHTML = ''
        for(let t = 1; t <= 10; t++){
            let item = document.createElement('option')
            item.innerHTML = `${n} X ${t} = ${n*t}`
            item.value = `tab${t}` 
            // cria um value dentro da tag!!!!!!!!!!
            item.id = `opt${t}`
            // cria um id dentro da tag!!!!
            tabua.appendChild(item)
        }
    }
}