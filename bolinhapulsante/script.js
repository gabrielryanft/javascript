var c_width = document.body.clientWidth
var c_height = document.body.clientHeight
const elemento = document.querySelector("main")

console.log(c_height, c_width)

if (c_width < c_height){
    elemento.style.setProperty("--m_height", "10vw") 
    elemento.style.setProperty("--m_width", "10vw") 
} else {
    elemento.style.setProperty("--m_height", "10vh") 
    elemento.style.setProperty("--m_width", "10vh") 
}

//notei que eu poderia ter usado vmin no css