
const imgs = document.querySelectorAll(".imgs")

function sudoMouse_position() {
    imgs.forEach((img, index) => {
        img.addEventListener("mousemove", (event) => {

            var sobra = img.getBoundingClientRect()

            var x = event.clientX - sobra.left
            var y = event.clientY - sobra.top

            document.documentElement.style.setProperty(`--x_mouse${index}`, `${x}px`)
            document.documentElement.style.setProperty(`--y_mouse${index}`, `${y}px`)

            if(index==3){
                document.documentElement.style.setProperty("--min_w", "35vmin")
                document.documentElement.style.setProperty("--min_h", "21vmin")
                document.documentElement.style.setProperty("--max_w", "35vmin")
                document.documentElement.style.setProperty("--max_h", "21vmin")
                document.documentElement.style.setProperty("--outln_sz", "8px")
                document.documentElement.style.setProperty("--outln_clr", "rgba(0, 33, 0, 0.838)")
            } else {
                document.documentElement.style.setProperty(`--padding_sudo${index}`, "0.5rem")
                document.documentElement.style.setProperty(`--font_sz_sudo${index}`, "0.8rem")
            }
        })
        img.addEventListener("mouseout", () => {
            setTimeout(() => {
                if(index==3){
                    document.documentElement.style.setProperty("--min_w", "0")
                    document.documentElement.style.setProperty("--min_h", "0")
                    document.documentElement.style.setProperty("--max_w", "0")
                    document.documentElement.style.setProperty("--max_h", "0")
                    document.documentElement.style.setProperty("--outln_sz", "0")
                    document.documentElement.style.setProperty("--outln_clr", "transparent")
                } else {
                    document.documentElement.style.setProperty(`--padding_sudo${index}`, "0")
                    document.documentElement.style.setProperty(`--font_sz_sudo${index}`, "0")
                }
            }, 500)
        })
    })
}

sudoMouse_position()
