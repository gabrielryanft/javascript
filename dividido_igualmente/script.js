const img = document.querySelector("img")
const wrapper = document.querySelector("#wrapper")
const img_user = document.querySelector("#img_user")

img.onload = function(){
    if(img.height > img.width){
        wrapper.style.height = `${img_sz.value}%`
        tamanho.textContent = `h${img_sz.value}`
        wrapper.style.width = "auto"
    } else{
        wrapper.style.width = `${img_sz.value}%`
        tamanho.textContent = `w${img_sz.value}`
        wrapper.style.height = "auto"
    }
}
img_user.addEventListener("change", ()=>{
    let reader = new FileReader()
    reader.onload = function(){
        img.src = reader.result
    }
    img.onload = function(){
        if(img.height > img.width){
            wrapper.style.height = `${img_sz.value}%`
            tamanho.textContent = `h${img_sz.value}`
            wrapper.style.width = "auto"
        } else{
            wrapper.style.width = `${img_sz.value}%`
            tamanho.textContent = `w${img_sz.value}`
            wrapper.style.height = "auto"
        }
    }
    reader.readAsDataURL(img.src)
})

const link_img = document.querySelector("#link_img")
function submit_img(){
    img.src = link_img.value
}

const img_sz = document.querySelector("#img_sz")
var tamanho = document.querySelector("#tamanho")
img_sz.addEventListener("input", ()=>{
    if(img.height > img.width){
        wrapper.style.height = `${img_sz.value}%`
        tamanho.textContent = `h${img_sz.value}`
        wrapper.style.width = "auto"
    } else{
        wrapper.style.width = `${img_sz.value}%`
        tamanho.textContent = `w${img_sz.value}`
        wrapper.style.height = "auto"
    }
})
const num_col = document.querySelector("#num_col")
num_col.addEventListener("change", ()=>{
    document.documentElement.style.setProperty("--n_col", `${100 / num_col.value}%`)
})
const num_row = document.querySelector("#num_row")
num_row.addEventListener("change", ()=>{
    document.documentElement.style.setProperty("--n_row", `${100 / num_row.value}%`)
})