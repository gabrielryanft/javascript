var historico = []

document.addEventListener('DOMContentLoaded', function(){
    const efeitos = document.querySelectorAll('.pRange')

    efeitos.forEach(function(div){
        var pClicado = div.querySelector('label')
        var pNome = pClicado.textContent

        var valorRange = null
        function checarValorRangeOn(){
            var rangeAtiva = div.querySelector('input')
            var valorRange = rangeAtiva.value
            return valorRange
        }

        div.addEventListener('click', function(){
            valorRange = checarValorRangeOn()

            console.log(pNome);
            console.log(valorRange)

            historico[pNome] = valorRange
            console.log(historico)

            var image = document.querySelector('img')
            if (pNome == "blur"){
                medida = "px"
            } else if (pNome == "hue-rotate"){
                medida = "deg"
            } else {
                medida = "%"
            }
            image.style = `filter: ${pNome}(${valorRange}${medida});`
        })   
    })
})