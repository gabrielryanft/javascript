
const imgs = document.querySelectorAll(".imgs")

function sudoMouse_position() {
    imgs.forEach((img, index) => {
        img.addEventListener("mousemove", (event) => {

            var sobra = img.getBoundingClientRect()

            var x = event.clientX - sobra.left
            var y = event.clientY - sobra.top

            document.documentElement.style.setProperty(`--x_mouse${index}`, `${x}px`)
            document.documentElement.style.setProperty(`--y_mouse${index}`, `${y}px`)

            document.documentElement.style.setProperty(`--padding_sudo${index}`, "0.5rem")
            document.documentElement.style.setProperty(`--font_sz_sudo${index}`, "0.8rem")
        })
        img.addEventListener("mouseout", () => {
            setTimeout(() => {
                document.documentElement.style.setProperty(`--padding_sudo${index}`, "0")
                document.documentElement.style.setProperty(`--font_sz_sudo${index}`, "0")
            }, 500)
        })
    })
}

sudoMouse_position()
