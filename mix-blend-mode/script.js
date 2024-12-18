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
		this.size = 10;
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

var opacity_draw = document.querySelector("#opacity");
var output_opacity = document.querySelector("#output-opacity");
opacity_draw.addEventListener("input", () => {
	output_opacity.innerHTML = `${opacity_draw.value}`;
});

var color_element = document.querySelector("#col");
var color;
color_element.addEventListener("input", () => {
	color = color_element.value;
	console.log(color);
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
