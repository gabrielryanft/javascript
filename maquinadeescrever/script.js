//Primeira tentativa: 
//Ocorre um erro qundo chamo a função enquanto as letras estão sendo "digitadas". acontece por causa de mistura do for e setTimeout.

// const texto = document.querySelector("#texto")
// function trocar_texto(){
//     const input_texto = document.querySelector("#input_texto").value
//     console.log(input_texto)
//     if(input_texto === ""){
//         animacao("Escreva algo na caixa de texto")   
//     } else{
//         animacao(input_texto)
//     }
// }
// function animacao(texto_usr){
//     texto.innerHTML = ""
//     texto.ariaLabel = `Texto "${texto_usr}" escrito com uma animação de máquina de escrever.`
//     setTimeout(() => {
//         for(let i=0; i<(texto_usr.length); i++){
//             setTimeout(() =>{
//                 texto.innerHTML += `${texto_usr[i]}`
//                 if(i==(texto_usr.length)){
//                 }
//             }, 120 * i)
//         }
//     }, 500)
// }
// trocar_texto()

//Segunda tentativa:
//O setTimeout continua "escrevendo" quando a função é chamada enquanto ele "escreve" (ao invéz de começar de zero)(O mesmo problema do codigo a cima, só que sem o for loop.) 

// const texto = document.querySelector("#texto")
// function trocar_texto(){
//     const input_texto = document.querySelector("#input_texto").value
//     if(input_texto === ""){
//         setTimeout(() =>{
//             animacao("Escreva algo na caixa de texto")   
//         }, 500)
//     } else{
//         setTimeout(() =>{
//             animacao(input_texto)
//         }, 500)
//     }
// }
// function animacao(texto_usr, i=0){
//     if(i === 0){
//         texto.innerHTML = ""
//         texto.ariaLabel = `Texto "${texto_usr}" escrito com uma animação de máquina de escrever.`
//     }
//     texto.innerHTML += `${texto_usr[i]}`
//         if(i === (texto_usr.length - 1)){
//             return
//         }
//     setTimeout(() =>{
//         animacao(texto_usr, i+1)
//     }, 120)
// }
// trocar_texto()

//Terceira tentativa:

const texto = document.querySelector("#texto")
function trocar_texto(){
    const input_texto = document.querySelector("#input_texto").value
    if(input_texto === ""){
        animacao("Escreva algo na caixa de texto")   
    } else{
        animacao(input_texto)
    }
}
function animacao(texto_usr, i=0){
    if(i === 0){
        clearTimeout(texto.this) //essas duas linhazinhas de código resolveram. (linha importante 1 (primeira))
        texto.innerHTML = ""
        texto.ariaLabel = `Texto "${texto_usr}" escrito com uma animação de máquina de escrever.`
    }
    texto.this = setTimeout(() =>{ //essas duas linhazinhas de código resolveram. (linha importante 2(última))
        texto.innerHTML += `${texto_usr[i]}`

        if(i === (texto_usr.length - 1)){
            return
        }
        
        animacao(texto_usr, i+1)
    }, 120)

}
trocar_texto()