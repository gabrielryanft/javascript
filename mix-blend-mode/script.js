// deno-lint-ignore-file no-var
const c = document.querySelectorAll("canvas");

var cc = [];
c.forEach((canvas) => {
	// Canvas setup
	cc.push(canvas.getContext("2d"));
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
});

var particles = [];
var mouse_pos = {
	x: undefined,
	y: undefined,
};

class Particle {
	constructor() {
		this.x = mouse_pos.x;
		this.y = mouse_pos.y;
		this.color = color;
		this.size = sizeValue;
	}

	draw() {
		if (one_c_at_a_time == true) {
			//Draw a square in only the canvas
			//that is being clicked
			cc[canvas_i].beginPath();
			cc[canvas_i].fillStyle = this.color;
			cc[canvas_i].rect(
				this.x - this.size / 2,
				this.y - this.size / 2,
				this.size,
				this.size,
			);
			cc[canvas_i].fill();
			cc[canvas_i].closePath();
		} else {
			// Draw a square in all the canvas.
			cc.forEach((canvas) => {
				canvas.beginPath();
				canvas.fillStyle = this.color;
				canvas.rect(
					this.x - this.size / 2,
					this.y - this.size / 2,
					this.size,
					this.size,
				);
				canvas.fill();
				canvas.closePath();
			});
		}
	}
}

var mouse_down = false;
var canvas_i;

c.forEach((canvas, index) => {
	canvas.addEventListener("pointerdown", (event) => {
		event.preventDefault();
		mouse_down = true;
		canvas_i = index;

		const rect = canvas.getBoundingClientRect();
		mouse_pos.x = event.clientX - rect.left;
		mouse_pos.y = event.clientY - rect.top;

		particles.push(new Particle());
		particles[particles.length - 1].draw();
	});

	canvas.addEventListener("pointermove", (event) => {
		if (mouse_down) {
			const rect = canvas.getBoundingClientRect();
			mouse_pos.x = event.clientX - rect.left;
			mouse_pos.y = event.clientY - rect.top;

			particles.push(new Particle());
			particles[particles.length - 1].draw();
		}
	});

	canvas.addEventListener("pointerup", () => {
		mouse_down = false;
	});
});

// Stop drawing on mouse out
const infinite_n = document.querySelector("#infinite_n");
infinite_n.addEventListener("input", () => {
	if (infinite_n.checked == true) {
		c.forEach((canvas) => {
			canvas.addEventListener("mouseout", handleMouseOut, true);
		});
	}
});

function handleMouseOut() {
	mouse_down = false; // Stop drawing
}

const infinite_y = document.querySelector("#infinite_y");
infinite_y.addEventListener("input", () => {
	if (infinite_y.checked == true) {
		c.forEach((canvas) => {
			canvas.removeEventListener("mouseout", handleMouseOut, true);
		});
	}
});

const size_brsh = document.querySelector("#size_brsh");
var sizeValue = size_brsh.value;
size_brsh.addEventListener("input", () => {
	sizeValue = size_brsh.value;
});

var color_element = document.querySelector("#col");
var color_hex = color_element.value;
var color = color_hex;
color_element.addEventListener("input", () => {
	color_hex = color_element.value;
	color = `rgba(${parseInt(color_hex.slice(1, 3), 16)}, ${
		parseInt(color_hex.slice(3, 5), 16)
	}, ${parseInt(color_hex.slice(5, 7), 16)}, ${opacity_draw.value})`;
	//the 0 position is the hash sign (#)
});

var opacity_draw = document.querySelector("#opacity");
var output_opacity = document.querySelector("#output-opacity");
opacity_draw.addEventListener("input", () => {
	output_opacity.innerHTML = `${opacity_draw.value}`;
	color = `rgba(${Number(parseInt(color_hex.slice(1, 3), 16))}, ${
		Number(parseInt(color_hex.slice(3, 5), 16))
	}, ${Number(parseInt(color_hex.slice(5, 7), 16))}, ${
		Number(opacity_draw.value)
	})`;
});

var one_c_at_a_time;
var noe_all = document.querySelector("#noe_all");
noe_all.addEventListener("input", () => {
	if (noe_all.checked == true) {
		one_c_at_a_time = false;
	}
});

var noe_one = document.querySelector("#noe_one");
noe_one.addEventListener("input", () => {
	if (noe_one.checked == true) {
		one_c_at_a_time = true;
	}
});

var pis = document.querySelectorAll("p");

var showname_n = document.querySelector("#showname_n");
showname_n.addEventListener("input", () => {
	if (showname_n.checked == true) {
		pis.forEach((p) => {
			p.style.display = "none";
		});
	}
});

var showname_y = document.querySelector("#showname_y");
showname_y.addEventListener("input", () => {
	if (showname_y.checked == true) {
		pis.forEach((p) => {
			p.style.display = "inline";
		});
	}
});

const modal = document.querySelector("#modal")
const abrir_modal = document.querySelector("#abrir_modal")
const fechar_modal = document.querySelector("#fechar_modal")

abrir_modal.addEventListener("click", () =>{
    modal.showModal()
    console.log("Modal aberto!")
})
fechar_modal.addEventListener("click", () => {
    modal.close()
    console.log("Modal fechado!")
})
