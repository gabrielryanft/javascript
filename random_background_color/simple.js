const color_simple = ["green", "blue", "yellow", "red", "purple", "brown", "orange", "pink"]
const btn = document.getElementById("btn")
const what_color = document.getElementById("what_color")
btn.addEventListener("click", () => {
    var current_color = position()
    what_color.textContent = color_simple[current_color]
    document.documentElement.style.setProperty('--color_bg', color_simple[current_color])
    console.log(color_simple[current_color])
})
function position(){
    return Math.floor(Math.random() * color_simple.length)
} 