const color_hexadecimal = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("btn")
const what_color = document.getElementById("what_color")
btn.addEventListener("click", () => {
    var hexadecimal = hex_maker()
    what_color.textContent = hexadecimal
    document.documentElement.style.setProperty('--color_bg', hexadecimal)
    console.log(hexadecimal)
})
function hex_maker(){
    let hex_color = "#"
    for (let num = 0; num < 6; num++){
        let hex = Math.floor(Math.random() * color_hexadecimal.length)
        hex_color += color_hexadecimal[hex]
    }
    return hex_color
} 