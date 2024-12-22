const c = document.querySelectorAll("canvas");

var list_cntxt = {};
for (let i = 0; i < c.length; i++) {
    list_cntxt[i] = c[i].getContext("2d");
    c[i].width = c[i].offsetWidth;
    c[i].height = c[i].offsetHeight;
}

window.addEventListener("resize", () => {
    for (let i = 0; i < 10; i++) {
        c[i].width = c[i].offsetWidth;
        c[i].height = c[i].offsetHeight;
    }
    canvas_things();
});

function canvas_things() {
    // white body:
    list_cntxt[0].fillStyle = "white";

    const size_body = 2;

    let head_w = 18 * size_body;
    let neck_w = 10 * size_body;
    let belly_w = 30 * size_body;
    let arm_w = 7 * size_body;
    let leg_w = 11 * size_body;

    let head_h = 18 * size_body;
    let neck_h = 5 * size_body;
    let belly_h = 40 * size_body;
    let arm_h = 40 * size_body;
    let leg_h = 50 * size_body;

    list_cntxt[0].fillRect(50, 35, head_w, head_h);
    list_cntxt[0].fillRect(
        50 + ((head_w / 2) - (neck_w / 2)),
        35 + head_h,
        neck_w,
        neck_h,
    );
    list_cntxt[0].fillRect(
        50 + ((head_w / 2) - (belly_w / 2)),
        35 + head_h + neck_h,
        belly_w,
        belly_h,
    );
    list_cntxt[0].fillRect(
        50 + ((head_w / 2) - (belly_w / 2)),
        35 + head_h + neck_h + belly_h,
        leg_w,
        leg_h,
    );
    list_cntxt[0].fillRect(
        50 + ((head_w / 2) - (belly_w / 2)) + belly_w - leg_w,
        35 + head_h + neck_h + belly_h,
        leg_w,
        leg_h,
    );
    list_cntxt[0].fillRect(
        50 + ((head_w / 2) - (belly_w / 2)) - arm_w - 2,
        35 + head_h + neck_h,
        arm_w,
        arm_h,
    );
    list_cntxt[0].fillRect(
        50 + ((head_w / 2) - (belly_w / 2)) + belly_w + 2,
        35 + head_h + neck_h,
        arm_w,
        arm_h,
    );

    //pacman

    const size_my_balls = 2;

    let pacman_radian = 50 * size_my_balls;
    let angle_mouth = 30;

    list_cntxt[1].beginPath();
    list_cntxt[1].strokeStyle = "yellow";
    list_cntxt[1].fillStyle = "yellow";
    list_cntxt[1].lineWidth = 3;
    list_cntxt[1].arc(
        30 + pacman_radian,
        40 + pacman_radian,
        pacman_radian,
        (Math.PI / 180) * angle_mouth,
        (Math.PI / 180) * (360 - angle_mouth),
        false,
    );
    list_cntxt[1].lineTo(30 + pacman_radian, 40 + pacman_radian);
    list_cntxt[1].closePath();
    list_cntxt[1].stroke();
    list_cntxt[1].fill();

    // pacman balls
    let little_balls_rad = 10 * size_my_balls;
    let balls_spacing = 20 * size_my_balls;

    list_cntxt[1].beginPath();
    list_cntxt[1].fillStyle = "blue";
    list_cntxt[1].arc(
        30 + (pacman_radian * 2) + balls_spacing,
        40 + pacman_radian,
        little_balls_rad,
        0,
        Math.PI * 2,
    );
    list_cntxt[1].fill();
    list_cntxt[1].closePath();

    list_cntxt[1].beginPath();
    list_cntxt[1].fillStyle = "blue";
    list_cntxt[1].arc(
        30 + (pacman_radian * 2) + (balls_spacing * 2 + pacman_radian),
        40 + pacman_radian,
        little_balls_rad,
        0,
        Math.PI * 2,
    );
    list_cntxt[1].fill();
    list_cntxt[1].closePath();

    list_cntxt[1].beginPath();
    list_cntxt[1].fillStyle = "blue";
    list_cntxt[1].arc(
        30 + (pacman_radian * 2) + (balls_spacing * 3 + pacman_radian * 2),
        40 + pacman_radian,
        little_balls_rad,
        0,
        Math.PI * 2,
    );
    list_cntxt[1].fill();
    list_cntxt[1].closePath();

    // canvas click

    const mouse_c = {
        x: undefined,
        y: undefined,
    };

    const third_cnv = document.querySelector("#third_cnv");

    var over_c = third_cnv.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        over_c = third_cnv.getBoundingClientRect().top;
    });

    third_cnv.addEventListener("click", (event) => {
        mouse_c.x = event.x;
        mouse_c.y = event.y - over_c;

        Balls_c();
    });

    function Balls_c() {
        list_cntxt[2].beginPath();
        list_cntxt[2].fillStyle = "green";
        list_cntxt[2].arc(mouse_c.x, mouse_c.y, 10, 0, Math.PI * 2);
        list_cntxt[2].fill();
        list_cntxt[2].closePath();
    }

    //canvas move mouse

    const mouse_m = {
        x: undefined,
        y: undefined,
    };

    const fouth_cnv = document.querySelector("#fouth_cnv");

    var over_m = fouth_cnv.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        over_m = fouth_cnv.getBoundingClientRect().top;
    });

    fouth_cnv.addEventListener("mousemove", (event) => {
        mouse_m.x = event.x;
        mouse_m.y = event.y - over_m;

        Balls_m();
    });

    function Balls_m() {
        list_cntxt[3].beginPath();
        list_cntxt[3].fillStyle = "green";
        list_cntxt[3].arc(mouse_m.x, mouse_m.y, 10, 0, Math.PI * 3);
        list_cntxt[3].fill();
        list_cntxt[3].closePath();
    }

    // canvas click move

    const mouse_cm = {
        x: undefined,
        y: undefined,
    };

    const fifth_cnv = document.querySelector("#fifth_cnv");

    var over_cm = fifth_cnv.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        over_cm = fifth_cnv.getBoundingClientRect().top;
    });

    var mou_dow = false;
    fifth_cnv.addEventListener("mousedown", () => {
        mou_dow = true;
    });

    fifth_cnv.addEventListener("mousemove", (event) => {
        if (mou_dow) {
            mouse_cm.x = event.x;
            mouse_cm.y = event.y - over_cm;

            Balls_cm();
        }
    });

    fifth_cnv.addEventListener("mouseup", () => {
        mou_dow = false;
    });

    function Balls_cm() {
        list_cntxt[4].beginPath();
        list_cntxt[4].fillStyle = "green";
        list_cntxt[4].arc(mouse_cm.x, mouse_cm.y, 10, 0, Math.PI * 2);
        list_cntxt[4].fill();
        list_cntxt[4].closePath();
    }

    //follow mouse

    const mouse_fm = {
        x: undefined,
        y: undefined,
    };

    const sixth_cnv = document.querySelector("#sixth_cnv");

    var over_fm = sixth_cnv.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
        over_fm = sixth_cnv.getBoundingClientRect().top;
    });

    sixth_cnv.addEventListener("mousemove", (event) => {
        mouse_fm.x = event.x;
        mouse_fm.y = event.y - over_fm;

        Balls_fm();
    });

    function Balls_fm() {
        list_cntxt[5].clearRect(0, 0, c[5].width, c[5].height);
        list_cntxt[5].beginPath();
        list_cntxt[5].fillStyle = "green";
        list_cntxt[5].arc(mouse_fm.x, mouse_fm.y, 30, 0, Math.PI * 2);
        list_cntxt[5].fill();
        list_cntxt[5].closePath();
        requestAnimationFrame(Balls_fm);
    }

    // spines mouse move

    var mouse_smm = {
        y: undefined,
        x: undefined,
    };

    class Particle_smm {
        constructor() {
            this.y = mouse_smm.y;
            this.x = mouse_smm.x;
            this.size = Math.random() * 5 + 1;
            this.speedy = Math.random() * 2 - 1;
            this.speedx = Math.random() * 2 - 1;
        }
        update_smm() {
            this.y += this.speedy;
            this.x += this.speedx;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw_balls_smm() {
            list_cntxt[9].fillStyle = "green";
            list_cntxt[9].beginPath();
            list_cntxt[9].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[9].fill();
            list_cntxt[9].closePath();
        }
    }

    var click_tf_smm = false;
    c[9].addEventListener("mousedown", () => {
        click_tf_smm = true;
    });

    c[9].addEventListener("mousemove", (event) => {
        if (click_tf_smm) {
            var gbcr_smm = c[9].getBoundingClientRect().top;
            mouse_smm.y = event.y - gbcr_smm;
            mouse_smm.x = event.x;
            array_balls_smm.push(new Particle_smm());
        }

        // raf_tf_smm = true
        // refresh_screen_smm()

        //The commented-out section speeds up the animation when many particles are being created.
    });

    c[9].addEventListener("mouseup", () => {
        click_tf_smm = false;
    });

    var array_balls_smm = [];
    function refresh_done_balls_smm() {
        for (let i = 0; i < array_balls_smm.length; i++) {
            array_balls_smm[i].update_smm();
            array_balls_smm[i].draw_balls_smm();
            if (array_balls_smm[i].size <= 0.3) {
                array_balls_smm.splice(i, 1);
                i--;
            }
        }
    }

    function refresh_screen_smm() {
        // if (array_balls_smm.length == 0){
        // raf_tf_smm = false
        // list_cntxt[9].clearRect(0, 0, c[9].width, c[9].height)
        // }
        // if (raf_tf_smm == true){
        list_cntxt[9].fillStyle = "rgba(0, 0, 0, 0.02)";
        list_cntxt[9].fillRect(0, 0, c[9].width, c[9].height);
        refresh_done_balls_smm();
        requestAnimationFrame(refresh_screen_smm);
        // }

        //The commented-out section speeds up the animation when many particles are being created.
    }
    refresh_screen_smm();

    // particles mouse move

    var mouse_pmm = {
        y: undefined,
        x: undefined,
    };

    class Particle_pmm {
        constructor() {
            this.y = mouse_pmm.y;
            this.x = mouse_pmm.x;
            this.size = Math.random() * 7 + 1;
            this.color_indx = Math.floor(Math.random() * n);
            this.speedy = Math.random() * 2 - 1;
            this.speedx = Math.random() * 2 - 1;
        }
        update_pmm() {
            this.y += this.speedy;
            this.x += this.speedx;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw_balls_pmm() {
            list_cntxt[10].fillStyle = "green";
            list_cntxt[10].beginPath();
            list_cntxt[10].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[10].fill();
            list_cntxt[10].closePath();
        }
    }

    var click_tf_pmm = false;
    c[10].addEventListener("mousedown", () => {
        click_tf_pmm = true;
    });

    c[10].addEventListener("mouseup", () => {
        click_tf_pmm = false;
    });

    c[10].addEventListener("mousemove", (event) => {
        if (click_tf_pmm) {
            var gbcr_pmm = c[10].getBoundingClientRect().top;

            mouse_pmm.y = event.y - gbcr_pmm;
            mouse_pmm.x = event.x;
            for (let i = 0; i < 1; i++) {
                array_balls_pmm.push(new Particle_pmm());
            }
        }
    });

    var array_balls_pmm = [];

    function refresh_done_balls_pmm() {
        for (let i = 0; i < array_balls_pmm.length; i++) {
            array_balls_pmm[i].update_pmm();
            array_balls_pmm[i].draw_balls_pmm();
            if (array_balls_pmm[i].size <= 0.3) {
                array_balls_pmm.splice(i, 1);
                i--;
            }
        }
    }

    function refresh_screen_pmm() {
        list_cntxt[10].fillStyle = "rgba(0, 0, 0, 0.2)";
        list_cntxt[10].fillRect(0, 0, c[10].width, c[10].height);
        refresh_done_balls_pmm();
        requestAnimationFrame(refresh_screen_pmm);
    }
    refresh_screen_pmm();

    //fireworks circus

    var mouse_fwc = {
        y: undefined,
        x: undefined,
    };

    var array_clrs_fwc = [
        "blue",
        "yellow",
        "pink",
        "green",
        "purple",
        "white",
        "red",
        "orange",
    ];
    const n = array_clrs_fwc.length;
    class Particle_fwc {
        constructor() {
            this.y = mouse_fwc.y;
            this.x = mouse_fwc.x;
            this.size = Math.random() * 7 + 1;
            this.color_indx = Math.floor(Math.random() * n);
            this.speedy = Math.random() * 2 - 1;
            this.speedx = Math.random() * 2 - 1;
        }
        update_fwc() {
            this.y += this.speedy;
            this.x += this.speedx;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw_balls_fwc() {
            list_cntxt[11].fillStyle = array_clrs_fwc[this.color_indx];
            list_cntxt[11].beginPath();
            list_cntxt[11].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[11].fill();
            list_cntxt[11].closePath();
        }
    }

    var click_tf_fwc = false;
    c[11].addEventListener("mousedown", () => {
        click_tf_fwc = true;
    });

    c[11].addEventListener("mousemove", (event) => {
        if (click_tf_fwc) {
            var gbcr_fwc = c[11].getBoundingClientRect().top;

            mouse_fwc.y = event.y - gbcr_fwc;
            mouse_fwc.x = event.x;
            array_balls_fwc.push(new Particle_fwc());

            sti_fwc = setInterval(() => {
                mouse_fwc.y = event.y - gbcr_fwc;
                mouse_fwc.x = event.x;
                array_balls_fwc.push(new Particle_fwc());
            }, 500);
        }
    });

    c[11].addEventListener("mouseup", () => {
        click_tf_fwc = false;
    });

    var array_balls_fwc = [];
    function refresh_done_balls_fwc() {
        for (let i = 0; i < array_balls_fwc.length; i++) {
            array_balls_fwc[i].update_fwc();
            array_balls_fwc[i].draw_balls_fwc();
            if (array_balls_fwc[i].size <= 0.3) {
                array_balls_fwc.splice(i, 1);
                i--;
            }
        }
    }

    function refresh_screen_fwc() {
        list_cntxt[11].fillStyle = "rgba(0, 0, 0, 0.2)";
        list_cntxt[11].fillRect(0, 0, c[11].width, c[11].height);
        refresh_done_balls_fwc();
        requestAnimationFrame(refresh_screen_fwc);
    }
    refresh_screen_fwc();

    // fireworks rgb

    var mouse_fwhue = {
        y: undefined,
        x: undefined,
    };
    let hue = 0;
    class Particle_fwhue {
        constructor() {
            this.y = mouse_fwhue.y;
            this.x = mouse_fwhue.x;
            this.size = Math.random() * 7 + 1;
            this.speedy = Math.random() * 0.5 - 0.25;
            this.speedx = Math.random() * 0.5 - 0.25;
            this.hue = hue;
            hue += 6;
        }
        update_fwhue() {
            this.y += this.speedy;
            this.x += this.speedx;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw_balls_fwhue() {
            list_cntxt[12].fillStyle = `hsl(${this.hue}, 100%, 50%)`;
            list_cntxt[12].beginPath();
            list_cntxt[12].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[12].fill();
            list_cntxt[12].closePath();
        }
    }

    var click_tf_fwhue = false;
    c[12].addEventListener("mousedown", () => {
        click_tf_fwhue = true;
    });

    c[12].addEventListener("mouseup", () => {
        click_tf_fwhue = false;
        clearInterval(sti_fwhue);
    });

    let sti_fwhue;
    c[12].addEventListener("mousemove", (event) => {
        if (click_tf_fwhue) {
            var gbcr_fwhue = c[12].getBoundingClientRect().top;

            mouse_fwhue.y = event.y - gbcr_fwhue;
            mouse_fwhue.x = event.x;
            array_balls_fwhue.push(new Particle_fwhue());

            sti_fwhue = setInterval(() => {
                mouse_fwhue.y = event.y - gbcr_fwhue;
                mouse_fwhue.x = event.x;
                array_balls_fwhue.push(new Particle_fwhue());
            }, 500);
        }
    });

    var array_balls_fwhue = [];

    function refresh_done_balls_fwhue() {
        for (let i = 0; i < array_balls_fwhue.length; i++) {
            array_balls_fwhue[i].update_fwhue();
            array_balls_fwhue[i].draw_balls_fwhue();
            if (array_balls_fwhue[i].size <= 0.3) {
                array_balls_fwhue.splice(i, 1);
                i--;
            }
        }
    }

    function refresh_screen_fwhue() {
        list_cntxt[12].fillStyle = "rgba(0, 0, 0, 0.2)";
        list_cntxt[12].fillRect(0, 0, c[12].width, c[12].height);
        refresh_done_balls_fwhue();
        requestAnimationFrame(refresh_screen_fwhue);
    }
    refresh_screen_fwhue();

    //connect particles

    var mouse_cp = {
        y: undefined,
        x: undefined,
    };
    class Particle_cp {
        constructor() {
            this.y = mouse_cp.y;
            this.x = mouse_cp.x;
            this.size = 1;
            this.speedy = Math.random() * 0.5 - 0.25;
            this.speedx = Math.random() * 0.5 - 0.25;
        }
        update_cp() {
            this.y += this.speedy;
            this.x += this.speedx;
        }
        draw_balls_cp() {
            list_cntxt[13].fillStyle = "green";
            list_cntxt[13].beginPath();
            list_cntxt[13].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[13].fill();
            list_cntxt[13].closePath();
        }
    }

    c[13].addEventListener("click", (event) => {
        var gbcr_cp = c[13].getBoundingClientRect().top;

        mouse_cp.y = event.y - gbcr_cp;
        mouse_cp.x = event.x;
        for (let i = 0; i < 3; i++) {
            array_balls_cp.push(new Particle_cp());
        }
    });

    var array_balls_cp = [];

    function refresh_done_balls_cp() {
        for (let i = 0; i < array_balls_cp.length; i++) {
            array_balls_cp[i].update_cp();
            array_balls_cp[i].draw_balls_cp();
            for (let j = 0; j < array_balls_cp.length; j++) {
                let dy = array_balls_cp[j].y - array_balls_cp[i].y;
                let dx = array_balls_cp[j].x - array_balls_cp[i].x;
                let hypotenuse = Math.sqrt(dy * dy + dx * dx);
                if (hypotenuse < 101) {
                    list_cntxt[13].beginPath();
                    list_cntxt[13].strokeStyle = "green";
                    list_cntxt[13].lineWidth = 0.05;
                    list_cntxt[13].moveTo(
                        array_balls_cp[j].x,
                        array_balls_cp[j].y,
                    );
                    list_cntxt[13].lineTo(
                        array_balls_cp[i].x,
                        array_balls_cp[i].y,
                    );
                    list_cntxt[13].stroke();
                }
            }
        }
    }

    function refresh_screen_cp() {
        list_cntxt[13].fillStyle = "rgba(0, 0, 0, 0.2)";
        list_cntxt[13].fillRect(0, 0, c[13].width, c[13].height);
        refresh_done_balls_cp();
        requestAnimationFrame(refresh_screen_cp);
    }
    refresh_screen_cp();

    // line connecting

    var mouse_lc = {
        y: undefined,
        x: undefined,
    };
    class Particle_lc {
        constructor() {
            this.y = mouse_lc.y + (Math.random() * 10);
            this.x = mouse_lc.x + (Math.random() * 10);
            this.count = 0;
            this.size = 1;
            this.speedy = Math.random() * 0.25 - 0.125;
            this.speedx = Math.random() * 0.25 - 0.125;
        }
        update_lc() {
            if (this.count > 100) {
                this.speedy = this.speedx * -1;
                this.speedx = this.speedx * -1;

                this.count = 0;
            }
            this.y += this.speedy;
            this.x += this.speedx;
            this.count++;
        }
        draw_balls_lc() {
            list_cntxt[14].fillStyle = "green";
            list_cntxt[14].beginPath();
            list_cntxt[14].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[14].fill();
            list_cntxt[14].closePath();
        }
    }

    let mouse_down_lc = false;
    c[14].addEventListener("mousedown", () => {
        mouse_down_lc = true;
    });

    let divisible_by_lc = 0;
    c[14].addEventListener("mousemove", (event) => {
        if (mouse_down_lc) {
            if ((divisible_by_lc / (3)) == 1) {
                var gbcr_lc = c[14].getBoundingClientRect().top;

                mouse_lc.y = event.y - gbcr_lc;
                mouse_lc.x = event.x;
                for (let i = 0; i < 2; i++) {
                    array_balls_lc.push(new Particle_lc());
                }
                divisible_by_lc = 0;
            }
            divisible_by_lc++;
        }
    });

    c[14].addEventListener("mouseup", () => {
        mouse_down_lc = false;
    });

    c[14].addEventListener("click", (event) => {
        var gbcr_lc = c[14].getBoundingClientRect().top;

        mouse_lc.y = event.y - gbcr_lc;
        mouse_lc.x = event.x;
        for (let i = 0; i < 3; i++) {
            array_balls_lc.push(new Particle_lc());
        }
    });

    var array_balls_lc = [];

    function refresh_done_balls_lc() {
        for (let i = 0; i < array_balls_lc.length; i++) {
            array_balls_lc[i].update_lc();
            array_balls_lc[i].draw_balls_lc();
            for (let j = 0; j < array_balls_lc.length; j++) {
                let dy = array_balls_lc[j].y - array_balls_lc[i].y;
                let dx = array_balls_lc[j].x - array_balls_lc[i].x;
                let hypotenuse = Math.sqrt(dy * dy + dx * dx);
                if (hypotenuse < 30) {
                    list_cntxt[14].beginPath();
                    list_cntxt[14].strokeStyle = "green";
                    list_cntxt[14].lineWidth = 0.05;
                    list_cntxt[14].moveTo(
                        array_balls_lc[j].x,
                        array_balls_lc[j].y,
                    );
                    list_cntxt[14].lineTo(
                        array_balls_lc[i].x,
                        array_balls_lc[i].y,
                    );
                    list_cntxt[14].stroke();
                }
            }
        }
    }

    function refresh_screen_lc() {
        list_cntxt[14].fillStyle = "rgba(0, 0, 0, 0.2)";
        list_cntxt[14].fillRect(0, 0, c[14].width, c[14].height);
        refresh_done_balls_lc();
        requestAnimationFrame(refresh_screen_lc);
    }
    refresh_screen_lc();

    // connecting particles temporary

    var mouse_cpt = {
        y: undefined,
        x: undefined,
    };

    class Particle_cpt {
        constructor() {
            this.y = mouse_cpt.y;
            this.x = mouse_cpt.x;
            this.size = Math.random() * 7 + 1;
            this.color_indx = Math.floor(Math.random() * n);
            this.speedy = Math.random() * 2 - 1;
            this.speedx = Math.random() * 2 - 1;
        }
        update_cpt() {
            this.y += this.speedy;
            this.x += this.speedx;
            if (this.size > 0.2) this.size -= 0.05;
        }
        draw_balls_cpt() {
            list_cntxt[15].fillStyle = "transparent";
            list_cntxt[15].beginPath();
            list_cntxt[15].arc(this.x, this.y, this.size, 0, Math.PI * 2);
            list_cntxt[15].fill();
            list_cntxt[15].closePath();
        }
    }

    var click_tf_cpt = false;
    c[15].addEventListener("mousedown", () => {
        click_tf_cpt = true;
    });

    c[15].addEventListener("mouseup", () => {
        click_tf_cpt = false;
    });

    c[15].addEventListener("mousemove", (event) => {
        if (click_tf_cpt) {
            var gbcr_cpt = c[15].getBoundingClientRect().top;

            mouse_cpt.y = event.y - gbcr_cpt;
            mouse_cpt.x = event.x;
            for (let i = 0; i < 1; i++) {
                array_balls_cpt.push(new Particle_cpt());
            }
        }
    });

    c[15].addEventListener("click", (event) => {
        var gbcr_cpt = c[15].getBoundingClientRect().top;

        mouse_cpt.y = event.y - gbcr_cpt;
        mouse_cpt.x = event.x;
        for (let i = 0; i < 6; i++) {
            array_balls_cpt.push(new Particle_cpt());
        }
    });

    var array_balls_cpt = [];

    function refresh_done_balls_cpt() {
        for (let i = 0; i < array_balls_cpt.length; i++) {
            array_balls_cpt[i].update_cpt();
            array_balls_cpt[i].draw_balls_cpt();
            for (let j = i; j < array_balls_cpt.length; j++) {
                let dx = array_balls_cpt[i].x - array_balls_cpt[j].x;
                let dy = array_balls_cpt[i].y - array_balls_cpt[j].y;
                var hypotenuse = Math.sqrt(dx * dx + dy * dy);

                if (hypotenuse < 40) {
                    list_cntxt[15].beginPath();
                    list_cntxt[15].strokeStyle = "green";
                    list_cntxt[15].lineWidth = 0.2;
                    list_cntxt[15].moveTo(
                        array_balls_cpt[j].x,
                        array_balls_cpt[j].y,
                    );
                    list_cntxt[15].lineTo(
                        array_balls_cpt[i].x,
                        array_balls_cpt[i].y,
                    );
                    list_cntxt[15].stroke();
                }
            }
            if (array_balls_cpt[i].size <= 0.3) {
                array_balls_cpt.splice(i, 1);
                i--;
            }
        }
    }

    function refresh_screen_cpt() {
        list_cntxt[15].fillStyle = "rgba(0, 0, 0, 0.2)";
        list_cntxt[15].fillRect(0, 0, c[15].width, c[15].height);
        refresh_done_balls_cpt();
        requestAnimationFrame(refresh_screen_cpt);
    }
    refresh_screen_cpt();
}
canvas_things();

// particles/balls green

class Particle_g {
    constructor() {
        this.y = Math.random() * c[6].height;
        this.x = Math.random() * c[6].width;
        this.size = Math.random() * 3 + 1;
        this.speedy = Math.random() * 2 - 1;
        this.speedx = Math.random() * 2 - 1;
    }
    update_g() {
        this.y += this.speedy;
        this.x += this.speedx;
    }
    draw_balls_g() {
        list_cntxt[6].beginPath();
        list_cntxt[6].fillStyle = "green";
        list_cntxt[6].arc(this.x, this.y, this.size, 0, Math.PI * 2);
        list_cntxt[6].fill();
        list_cntxt[6].closePath();
    }
}

function animation_balls_g() {
    var array_balls_g = [];

    function do_balls_g() {
        for (let i = 0; i < 30; i++) {
            array_balls_g.push(new Particle_g());
        }
    }
    do_balls_g();

    function refresh_done_balls_g() {
        for (let i = 0; i < array_balls_g.length; i++) {
            array_balls_g[i].update_g();
            array_balls_g[i].draw_balls_g();
        }
    }

    function refresh_screen_g() {
        list_cntxt[6].clearRect(0, 0, c[6].width, c[6].height);
        refresh_done_balls_g();
        requestAnimationFrame(refresh_screen_g);
    }
    refresh_screen_g();
}
animation_balls_g();

// particles/balls green to little

class Particle_gtl {
    constructor() {
        this.y = Math.random() * c[7].height;
        this.x = Math.random() * c[7].width;
        this.size = Math.random() * 3 + 1;
        this.speedy = Math.random() * 2 - 1;
        this.speedx = Math.random() * 2 - 1;
    }
    update_gtl() {
        this.y += this.speedy;
        this.x += this.speedx;
    }
    draw_balls_gtl() {
        list_cntxt[7].beginPath();
        list_cntxt[7].fillStyle = "green";
        list_cntxt[7].arc(this.x, this.y, this.size, 0, Math.PI * 2);
        list_cntxt[7].fill();
        list_cntxt[7].closePath();
    }
}

function animation_balls_gtl() {
    var array_balls_gtl = [];

    function do_balls_gtl() {
        for (let i = 0; i < 30; i++) {
            array_balls_gtl.push(new Particle_gtl());
        }
    }
    do_balls_gtl();

    function refresh_done_balls_gtl() {
        for (let i = 0; i < array_balls_gtl.length; i++) {
            array_balls_gtl[i].update_gtl();
            array_balls_gtl[i].draw_balls_gtl();
            if (array_balls_gtl[i].size > 0.2) {
                array_balls_gtl[i].size -= 0.01;
            }
            if (array_balls_gtl[i].size <= 0.3) {
                array_balls_gtl.splice(i, 1);
                i--;
            }
        }
    }

    var raf_tf_gtl = true;
    function refresh_screen_gtl() {
        if (array_balls_gtl.length == 0) {
            raf_tf_gtl = false;
            list_cntxt[7].clearRect(0, 0, c[7].width, c[7].height);
        }
        if (raf_tf_gtl == true) {
            list_cntxt[7].clearRect(0, 0, c[7].width, c[7].height);
            refresh_done_balls_gtl();
            requestAnimationFrame(refresh_screen_gtl);
        }
    }
    refresh_screen_gtl();
}
animation_balls_gtl();

// particles/balls scratch

class Particle_s {
    constructor() {
        this.y = Math.random() * c[8].height;
        this.x = Math.random() * c[8].width;
        this.size = Math.random() * 3 + 1;
        this.speedy = Math.random() * 2 - 1;
        this.speedx = Math.random() * 2 - 1;
    }
    update_s() {
        this.y += this.speedy;
        this.x += this.speedx;
    }
    draw_balls_s() {
        list_cntxt[8].beginPath();
        list_cntxt[8].fillStyle = "green";
        list_cntxt[8].arc(this.x, this.y, this.size, 0, Math.PI * 2);
        list_cntxt[8].fill();
        list_cntxt[8].closePath();
    }
}

var array_balls_s = [];
function animation_balls_s() {
    array_balls_s = [];
    list_cntxt[8].clearRect(0, 0, c[8].width, c[8].height);

    function do_balls_s() {
        for (let i = 0; i < 30; i++) {
            array_balls_s.push(new Particle_s());
        }
    }
    do_balls_s();

    function refresh_done_balls_s() {
        for (let i = 0; i < array_balls_s.length; i++) {
            array_balls_s[i].update_s();
            array_balls_s[i].draw_balls_s();
            if (array_balls_s[i].size > 0.2) {
                array_balls_s[i].size -= 0.01;
            }
            if (array_balls_s[i].size <= 0.3) {
                array_balls_s.splice(i, 1);
                i--;
            }
        }
    }

    var raf_tf_s = true;
    function refresh_screen_s() {
        if (array_balls_s.length == 0) {
            raf_tf_s = false;
        }
        if (raf_tf_s == true) {
            refresh_done_balls_s();
            requestAnimationFrame(refresh_screen_s);
        }
    }
    refresh_screen_s();
}
animation_balls_s();

//FOOTER

const grtts = document.querySelector("#grtts");
const footer = document.querySelector("footer");
footer.addEventListener("mouseover", noTopLeft);
function noTopLeft() {
    document.documentElement.style.setProperty(
        "--left-p",
        "0",
    );
    document.documentElement.style.setProperty(
        "--top-p",
        "0",
    );
    footer.removeEventListener("mouseover", noTopLeft);
}
footer.addEventListener("mousemove", (event) => {
    console.log(event.y, event.x);
    document.documentElement.style.setProperty(
        "--x-pos-footer",
        `calc(${event.x}px - 50%)`,
    );
    document.documentElement.style.setProperty(
        "--y-pos-footer",
        `calc(${event.y - grtts.getBoundingClientRect().top}px - 50%)`,
    );
});
