const wrapper = document.querySelector("#wrapper");
const img = document.querySelector("img");
const img_user = document.querySelector("#img_user");

img_user.addEventListener("change", setImg);

function setImg() {
    img.style.aspectRatio = `auto`; // These are the stars of the show
    wrapper.style.aspectRatio = `auto`; // It wasn't working because of this mf
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        img.src = reader.result;
        if ((img.width / img.height) <= 1.63636363636) {
            wrapper.style.height = `${img_sz.value}%`;
            tamanho.textContent = `h${img_sz.value}`;
            wrapper.style.width = "auto";
        } else if ((img.width / img.height) > 1.63636363636) {
            wrapper.style.width = `${img_sz.value}%`;
            tamanho.textContent = `w${img_sz.value}`;
            wrapper.style.height = "auto";
        }
        img.style.aspectRatio = `${img.width}/${img.height}`; // These are the stars of the show
        wrapper.style.aspectRatio = `${img.width}/${img.height}`; // It wasn't working because of this mf
    });
    reader.readAsDataURL(img_user.files[0]);
}

const link_img = document.querySelector("#link_img");
function submit_img() {
    img.style.aspectRatio = `auto`; // These are the stars of the show
    wrapper.style.aspectRatio = `auto`; // It wasn't working because of this mf
    img.src = link_img.value;
    img.addEventListener("load", () => {
        if (img.height > img.width) {
            wrapper.style.height = `${img_sz.value}%`;
            tamanho.textContent = `h${img_sz.value}`;
            wrapper.style.width = "auto";
        } else {
            wrapper.style.width = `${img_sz.value}%`;
            tamanho.textContent = `w${img_sz.value}`;
            wrapper.style.height = "auto";
        }
        img.style.aspectRatio = `${img.width}/${img.height}`; // These are the stars of the show
        wrapper.style.aspectRatio = `${img.width}/${img.height}`; // It wasn't working because of this mf
    });
}

const btn = document.querySelector("button");
link_img.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        btn.click();
    }
});

const img_sz = document.querySelector("#img_sz");
var tamanho = document.querySelector("#tamanho");
img_sz.addEventListener("input", () => {
    if (img.height > img.width) {
        wrapper.style.height = `${img_sz.value}%`;
        tamanho.textContent = `h${img_sz.value}`;
        wrapper.style.width = "auto";
    } else {
        wrapper.style.width = `${img_sz.value}%`;
        tamanho.textContent = `w${img_sz.value}`;
        wrapper.style.height = "auto";
    }
});

const num_col = document.querySelector("#num_col");
function num_col_change() {
    document.documentElement.style.setProperty(
        "--n_col",
        `${100 / num_col.value}%`,
    );
}

const num_row = document.querySelector("#num_row");
function num_row_change() {
    document.documentElement.style.setProperty(
        "--n_row",
        `${100 / num_row.value}%`,
    );
}

if ((img.width / img.height) <= 1.63636363636) {
    wrapper.style.height = `${img_sz.value}%`;
    tamanho.textContent = `h${img_sz.value}`;
    wrapper.style.width = "auto";
} else if ((img.width / img.height) > 1.63636363636) {
    wrapper.style.width = `${img_sz.value}%`;
    tamanho.textContent = `w${img_sz.value}`;
    wrapper.style.height = "auto";
}
img.style.aspectRatio = `${img.width}/${img.height}`; // These are the stars of the show
wrapper.style.aspectRatio = `${img.width}/${img.height}`; // It wasn't working because of this mf
