const listit = document.querySelector("#listitem");
const list = document.querySelector("#listchild");

function put() {
    const content = document.createElement("li");
    content.innerHTML = `${listit.value}`;
    list.appendChild(content);
}

listit.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        put();
        listit.value = "";
    }
});
