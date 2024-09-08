function verificar(){
    var dataid = document.getElementById('dataid')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var res0 = document.getElementById('res0')

    if(dataid.value.length < 4 || Number(dataid.value) > ano){
        alert('Preencha todos os campos com as  informações corretas.')
    } else{
        var sexnam = document.getElementsByName('sexoname')
        var idade = ano - Number(dataid.value)
        if(idade == 0){
            res.innerHTML = `Você não tem nem um ano!`
        } else if(idade == 1){
            res.innerHTML = `Você tem ${idade} ano.`
        } else{
            res.innerHTML = `Você tem ${idade} anos.`
        }
        var genero = ''
        var comp = ''
        var umaum = ''
        if(sexnam[0].checked){
            genero = 'Macho'
            umaum = 'um'
            if(idade < 5){
                comp = 'bebê'
            } else if(idade < 12){
                comp = 'criança'
            } else if (idade < 21){
                comp = 'jovem'
            } else if(idade < 60){
                comp = 'adulto'
            } else if(idade < 101){
                comp = 'velho'
            } else{
                comp = 'muito velho'
            }
        } else if( sexnam[1].checked){
            genero = 'Fêmea'
            umaum = 'uma'
            if(idade < 5){
                comp = 'bebê'
            } else if(idade < 12){
                comp = 'criança'
            } else if (idade < 21){
                comp = 'jovem'
            } else if(idade < 60){
                comp = 'adulta'
            } else if(idade < 101){
                comp = 'velha'
            } else{
                comp = 'muito velha'
            }
        }
        res0.innerHTML = `E você é ${umaum} ${genero} ${comp}!`
    }
}