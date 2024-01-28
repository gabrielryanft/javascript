const texto = document.querySelector("#texto")

function trocar_texto(){
    var input_texto = document.querySelector("#input_texto").value
    texto.innerHTML = ""
    texto.innerHTML = input_texto

    document.documentElement.style.setProperty("--numero_caracteres", input_texto.length + 1)
    document.documentElement.style.setProperty("--numero_caracteres_ch", input_texto.length + 1 + "ch")
    document.documentElement.style.setProperty("--tempo_digitacao", (input_texto.length + 1) * 0.160 + "s")
}
