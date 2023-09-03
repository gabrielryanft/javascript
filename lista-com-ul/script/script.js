function put(){
    let listit = document.querySelector('#listitem')
    let list = document.querySelector('#listchild')
    let content = document.createElement('li')

    content.innerHTML = `${listit.value}`

    list.appendChild(content)

}