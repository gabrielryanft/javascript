//modal: 

const calculo_explicacao = document.getElementById("calculo_explicacao")
aparecendo_explicacao = 0

function abrir(){
    calculo_explicacao.showModal()
    aparecendo_explicacao = 1
}

function fechar(){
    calculo_explicacao.close()
    aparecendo_explicacao = 0
}

//cálculo: 

function calcular(){
    var nota_primeiro = document.getElementById("nota1trimestre").value
    var nota_segundo = document.getElementById("nota2trimestre").value
    var nota_passar = document.getElementById("nota_passar")

    var nota_terceiro = (60 - ((3 * nota_primeiro) + (3 * nota_segundo))) / 4

    nota_passar.innerText = nota_terceiro
}

//gabriel totosão