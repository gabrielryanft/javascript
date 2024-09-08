
const spn_fetch = document.querySelector("#spn_fetch")

function new_message_fetch(){
    // fetch('https://httpstat.us/404')
    fetch('https://www.boredapi.com/api/activity?participants=1')
    .then(response => {
        if (response.ok){
            response.json()
            .then(data => spn_fetch.textContent = data.activity + "." )
        } else {
            spn_fetch.innerHTML = `<span style="color: #A61C28"><span style="font-weight: bold">Error</span>. API did not responded. Try again.</span>`
        }
    })
}
new_message_fetch()

const tag_footer = document.querySelector("#tag_footer")
const tag_span = document.querySelector("#tts")
const tts_lst = [
    "Hot",
    "Beautiful",
    "Built different",
    "Programer?",
    "Student",
    "Your BFF! &#x1F498 &#x1F49E &#x1FAF6",
    "The nicestest guy",
    "<span id='dtdtdt'><span id='little'>Nathing</span>...</span>",
    "<span contenteditable='true' spellcheck='false' id='waith'>What am i? Type here.</span>",
    "&#x1F937",
    "sudo",
    "Totosão"
]

function random0_11(n){
    const num = Math.floor(Math.random() * n)
    return num
}
var current_index = 11
function footer_tts(){
    let local_current_index = random0_11(tts_lst.length)
    if (current_index == local_current_index){
        footer_tts()
    } else {
        current_index = local_current_index
        console.log(current_index)
        tag_span.innerHTML = tts_lst[current_index]
    }
}