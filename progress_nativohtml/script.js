document.addEventListener("DOMContentLoaded", function(){
    const barra = document.querySelector("#barra_progresso")
    const filething = document.querySelector("#filething")
    const progresso = document.querySelector("#progresso")
    
    var alert_progresso = document.querySelector("#alert_progresso")
    var templ_alert = document.querySelector("#tmpl_alert")

    function lida_com_arquivos(your_files){
        let numberOfBytes = 0;
    
        for (const file of your_files) {
            numberOfBytes += file.size; 
        }
    
        if((`${numberOfBytes}`.length)>=("1000000000000".length)){
            numberOfBytes = numberOfBytes / 1000000000000
            var medida = "TB"
        } else if ((`${numberOfBytes}`.length)>=("1000000000".length)){
            numberOfBytes = numberOfBytes / 1000000000
            var medida = "GB"
        } else if ((`${numberOfBytes}`.length)>=("1000000".length)){
            numberOfBytes = numberOfBytes / 1000000
            var medida = "MB"
        } else if ((`${numberOfBytes}`.length)>=("1000".length)){
            numberOfBytes = numberOfBytes / 1000
            var medida = "KB"
        } else {
            numberOfBytes = numberOfBytes / 1
            var medida = "B"
        }   
     
        var clone_tmpl = templ_alert.content.cloneNode(true)
        var tmpl_span_alert = clone_tmpl.querySelector("#tmpl_span_alert")
        tmpl_span_alert.textContent = ""
        tmpl_span_alert.textContent = `${(numberOfBytes.toFixed(2)).toString().replace(".", ",")}${medida}`

        alert_progresso.innerHTML = "";
        alert_progresso.append(clone_tmpl)

    
        const um_cem = numberOfBytes / 100
        progresso.textContent = "0B"
        barra.value = 0
    
        for(let i=0;i<=100;i++){
            setTimeout(() =>{
                progresso.textContent = `${((um_cem*i).toFixed(2)).toString().replace(".", ",")}${medida}`
                barra.value = i
            }, 50 * i)
        }
    }
    
    filething.addEventListener("change", change, false)
    
    filething.addEventListener("dragenter", dragenter, false);
    filething.addEventListener("dragover", dragover, false);
    filething.addEventListener("drop", drop, false);
    filething.addEventListener("dragleave", dragleave, false)
    
    function change(e){
        e.stopPropagation() //o stopPropagation() serve para não disparar um evento listener do elemento pai(se tiver um pai com evento listener) ex: um pai com eventLintener de click e um filho, um botão com eventListener de printar uma mensagem: se o filho for clicado, a mensagem dele será printade no terminal e o pai trocará de cor, porque o filho foi clicado e o filho está dentro do pai. com stopPropagation() isso não acontece. video explicando o method: JavaScript Tutorial - Stopping Propagation with Event.stopPropagation()
        
        e.preventDefault() //o preventDefault() não permite que a ação default seja iniciada. ex: um link não funcionaria com preventDefault(). (No vídeo que eu assisti explicando isso o cara fez um check box que permite que você escolha se os links funcionariam ou não.)  vídeo: Prevent Default Explained in JavaScript | e.preventDefault() - Tutorial For Beginners
    
        const files = filething.files;
    
        lida_com_arquivos(files)
    }
    
    
    function dragenter(e) {
        e.stopPropagation()
        e.preventDefault()
        document.documentElement.style.setProperty("--cor_dragEnter", "rgb(107, 155, 123)")
    }
    
    function dragover(e) {
        e.stopPropagation()
        e.preventDefault()
    }
    
    function drop(e) {
        e.stopPropagation()
        e.preventDefault()
    
        const dt = e.dataTransfer
        const files = dt.files
    
        lida_com_arquivos(files);
        document.documentElement.style.setProperty("--cor_dragEnter", "rgb(165, 165, 165)")
    }
    
    function dragleave(){
        document.documentElement.style.setProperty("--cor_dragEnter", "rgb(165, 165, 165)")
    }
})