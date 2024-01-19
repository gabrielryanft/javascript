
const mostrarAlerta_btn = document.querySelector("#mostrarAlerta_btn")
const alertText = document.querySelector("#alertText")
const templ_alert = document.querySelector("#templ_alert")


mostrarAlerta_btn.onclick = function (){
    const clone_tmpl_alert = templ_alert.content.cloneNode(true)
    alertText.innerHTML = ""
    alertText.append(clone_tmpl_alert)
}
