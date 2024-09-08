//modal: 

const calculo_explicacao = document.getElementById("calculo_explicacao")
aparecendo_explicacao = 0

function abrir_ajuda(){
    calculo_explicacao.showModal()
    aparecendo_explicacao = 1
}

function fechar_ajuda(){
    calculo_explicacao.close()
    aparecendo_explicacao = 0
}

//cálculo: 

function calcular(){
    var nota_primeiro = document.getElementById("nota1trimestre").value
    var nota_segundo = document.getElementById("nota2trimestre").value
    var nota_passar = document.getElementById("nota_passar")

    var nota_terceiro = (60 - ((3 * nota_primeiro) + (3 * nota_segundo))) / 4

    if(nota_terceiro > 10){
        document.documentElement.style.setProperty("--cor_nota", "#a01a25")
        nota_terceiro = ` 
        <span 
            style="
                color: var(--cor_nota); 
                font-weight: bold; 
                animation: mostrar_nota 200ms linear;
            ">
            A nota que você precisa para passar é 
            <span 
                style="
                    border-bottom: 2px solid var(--cor_nota)
                ">
                ${nota_terceiro.toString().replace(".", ",")}
            </span> 
            .
            <span 
                style=" 
                    color: #ad2d9e; 
                    font-size: 1.5rem;
                    font-family: 'Nanum Pen Script', monospace, arial; 
                    transform: rotate(-10deg); 
                    position: absolute; 
                    bottom: -2rem; 
                    right: -.4rem"  
                class="brilhozinho"
                >
                Se fodeu!
            </span>
        </span>`
    } else {
        document.documentElement.style.setProperty("--cor_nota", "#408640")
        nota_terceiro = ` 
        <span 
            style="
                color: var(--cor_nota); 
                font-weight: bold; 
                animation: mostrar_nota 200ms linear; 
                font-size: 1.1rem
            ">
            A nota que você precisa para passar é 
            <span 
                style="
                    border-bottom: 2px solid var(--cor_nota)
                ">
                ${nota_terceiro}
            </span>
        </span>`
    }

    nota_passar.innerHTML = nota_terceiro
}