const img = document.querySelector("img")
const wrapper = document.querySelector("#wrapper")
const img_user = document.querySelector("#img_user")

img_user.addEventListener("change", () => {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        img.src = reader.result
        console.log(img.width/img.height)
        console.log(img.height/img.width)
        if ((img.width/img.height) <= 1.63636363636) {
            wrapper.style.height = `${img_sz.value}%`
            // wrapper.style.height = `calc(11vmin * 5)`
            tamanho.textContent = `h${img_sz.value}`
            wrapper.style.width = "auto"
        } else if((img.width/img.height) > 1.63636363636){
            wrapper.style.width = `${img_sz.value}%`
            // wrapper.style.width = `calc(18vmin * 5)`
            tamanho.textContent = `w${img_sz.value}`
            wrapper.style.height = "auto"
        }
    })
    reader.readAsDataURL(img_user.files[0])
})

const link_img = document.querySelector("#link_img")
function submit_img() {
    img.src = link_img.value
    img.addEventListener("load", ()=>{
        if (img.height > img.width) {
            wrapper.style.height = `${img_sz.value}%`
            tamanho.textContent = `h${img_sz.value}`
            wrapper.style.width = "auto"
        } else {
            wrapper.style.width = `${img_sz.value}%`
            tamanho.textContent = `w${img_sz.value}`
            wrapper.style.height = "auto"
        }
    })
}

const img_sz = document.querySelector("#img_sz")
var tamanho = document.querySelector("#tamanho")
img_sz.addEventListener("input", () => {
    if (img.height > img.width) {
        wrapper.style.height = `${img_sz.value}%`
        tamanho.textContent = `h${img_sz.value}`
        wrapper.style.width = "auto"
    } else {
        wrapper.style.width = `${img_sz.value}%`
        tamanho.textContent = `w${img_sz.value}`
        wrapper.style.height = "auto"
    }
})
const num_col = document.querySelector("#num_col")
function num_col_change(){
    document.documentElement.style.setProperty("--n_col", `${100 / num_col.value}%`)
}

const num_row = document.querySelector("#num_row")
function num_row_change(){
    document.documentElement.style.setProperty("--n_row", `${100 / num_row.value}%`)
}
