document.addEventListener('DOMContentLoaded', function(){
    const navegacao = document.querySelectorAll('nav div')
    const numeros = document.querySelector('#numeros')

    navegacao.forEach(function(link, index) {
        link.addEventListener('click', () => {
            numeros.style.top = '-' + (index * 400) + 'px'
            console.log('Gabriel R. é totoso')
        })
    })
})