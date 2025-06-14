document.addEventListener('DOMContentLoaded', efeitosfunc)
document.querySelector("#formulario").addEventListener("reset", resetEfeitos)

function efeitosfunc(){
    const efeitos = document.querySelectorAll('.pRange')
    efeitos.forEach(function(div){
        var pClicado = div.querySelector('label')
        var pNome = pClicado.textContent

        function checarValorRangeOn(){
            var rangeAtiva = div.querySelector('input')
            var valorRange = rangeAtiva.value
            return valorRange
        }

        div.addEventListener('input', function(){
            document.documentElement.style.setProperty(`--${pNome}`, `${checarValorRangeOn()}${medidafunc(pNome)}`)
        })
    })
}

const list100 = ["contrast", "brightness", "saturate"]
function resetEfeitos(){
    const efeitos = document.querySelectorAll('.pRange')
    efeitos.forEach(function(div){
        var pClicado = div.querySelector('label')
        var pNome = pClicado.textContent

        if(list100.includes(pNome)){
            var valor = "100"
        } else{
            var valor = "0"
        }
        console.log(valor)
        document.documentElement.style.setProperty(`--${pNome}`, `${valor}${medidafunc(pNome)}`)
    })
}

function medidafunc(nomeEfeito){
    if (nomeEfeito == "blur"){
        var medida = "px"
    } else if (nomeEfeito == "hue-rotate"){
        var medida = "deg"
    } else {
        var medida = "%"
    }
    return medida
}

var loadFile = function(event) {
	var image = document.getElementById('the_image');
	image.src = URL.createObjectURL(event.target.files[0]);
};

const modal = document.querySelector("#modal")
const abrir_modal = document.querySelector("#abrir_modal")
const fechar_modal = document.querySelector("#fechar_modal")

abrir_modal.addEventListener("click", () =>{
    modal.showModal()
    console.log("Modal aberto!")
})
fechar_modal.addEventListener("click", () => {
    modal.close()
    console.log("Modal fechado!")
})
