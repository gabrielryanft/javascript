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
		this.color = "rgba(100, 0, 0, 0.5)";
		this.size = 10;
	}

	draw() {
		// Draw a square in only the canvas
		// that is being clicked
		//cc[canvas_i].beginPath()
		//cc[canvas_i].fillStyle = this.color
		//cc[canvas_i].rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
		//cc[canvas_i].fill()
		//cc[canvas_i].closePath()

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

	// Stop drawing on mouse out
	//canvas.addEventListener("mouseout", () => {
	//	mouse_down = false // Stop drawing
	//})
});
