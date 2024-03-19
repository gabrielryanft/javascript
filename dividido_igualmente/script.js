const img = document.querySelector("img")
const img_user = document.querySelector("#img_user")
img_user.addEventListener("change", (e)=>{
    let reader = new FileReader()
    reader.onload = function(){
        img.src = reader.result
    }
    reader.readAsDataURL(img_user.files[0])

})
const link_img = document.querySelector("#link_img")
function submit_img(){
    img.src = link_img.value
}
const img_sz = document.querySelector("#img_sz")
var tamanho = document.querySelector("#tamanho")
img_sz.addEventListener("change", ()=>{

    if(img.height > img.width){
        img.style.height = `${img_sz.value}%`
        tamanho.textContent = `h${img_sz.value}`
        img.style.width = "auto"
    } else{
        img.style.width = `${img_sz.value}%`
        tamanho.textContent = `w${img_sz.value}`
        img.style.height = "auto"
    }
})
// const num_col = document.querySelector("#num_col")
// num_col.addEventListener("change", ()=>{
    
// })
// const num_row = document.querySelector("#num_row")
// num_row.addEventListener("change", ()=>{

// })