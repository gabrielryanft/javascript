
function  agora(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var h11 = document.getElementById('h11')
    var p1 = document.getElementById('p1')
    var main1 = document.getElementById('main1')
    var tudo = document.getElementById('tudo')
    var divimg = document.getElementById('divimg')
    
    if(hora >= 0 && hora <= 6){
        h11.innerHTML = `Boa madrugada!`
        if (hora <= 1){
            p1.innerHTML = `Agora é ${hora}:${min} da madrugada.`
        } else{
            p1.innerHTML = `Agora são ${hora}:${min} da madrugada.`
        }
        divimg.style.backgroundImage = 'url(imgs/madrugada.jpg)'
        document.body.style.backgroundImage = 'linear-gradient(rgb(0, 0, 0), rgb(26, 26, 26))'
        p1.style.background = '#404040'
        main1.style.background = '#262626'
        tudo.style.background = '#ffffffa5'
    } else if (hora >= 7 && hora <=11){
        h11.innerHTML = `Bom dia!`
        p1.innerHTML = `Agora são ${hora}:${min} da manhã!`
        divimg.style.backgroundImage = 'url(imgs/manha.jpg)'
        p1.style.background = 'rgb(187, 187, 54)'
        main1.style.background = 'rgb(209, 209, 118)'
        tudo.style.background = '#ffffffa5'
        document.body.style.backgroundImage = 'linear-gradient(rgb(117, 117, 26), rgb(204, 204, 96))'
    } else if (hora >= 12 && hora <=17){
        h11.innerHTML = `Boa tarde!`
        p1.innerHTML = `Agora são ${hora}:${min} da tarde!`
        divimg.style.backgroundImage = 'url(imgs/terde.jpg)'
        document.body.style.backgroundImage = 'linear-gradient(#ffffff, #ffffff)'
        p1.style.background = '#F79811'
        main1.style.background = '#E0741B'
        tudo.style.background = '#ffffffa5'
        document.body.style.backgroundImage = 'linear-gradient(#E0793B, #ED4632)'
    } else {
        h11.innerHTML = `Boa noite!`
        p1.innerHTML = `Agora são ${hora}:${min} da noite!`
        divimg.style.backgroundImage = 'url(imgs/noite.jpg)'
        p1.style.background = '#2C4A73'
        main1.style.background = '#063773'
        tudo.style.background = '#ffffffa5'
        document.body.style.backgroundImage = 'linear-gradient(#021226, #0D0D0D)'
        divimg.style.backgroundPosition = 'center left'
    }
    
}
