const c = document.querySelector("canvas")

var cc = c.getContext("2d")
c.width = c.offsetWidth
c.height = c.offsetHeight
var can_h = document.querySelector("#can_h")
can_h.addEventListener("input", ()=>{
  document.documentElement.style.setProperty("--can_h", can_h.value)
  gbcrl = c.getBoundingClientRect().left
  gbcrt = c.getBoundingClientRect().top
  c.width = c.offsetWidth
  c.height = c.offsetHeight
})
var can_w = document.querySelector("#can_w")
can_w.addEventListener("input", ()=>{
  document.documentElement.style.setProperty("--can_w", can_w.value)
  gbcrl = c.getBoundingClientRect().left
  gbcrt = c.getBoundingClientRect().top
  c.width = c.offsetWidth
  c.height = c.offsetHeight
})

// class particle_making{
//   constructor(){
//     this.x = instructions[i].x
//     this.y = instructions[i].y
//     this.index = instructions[i].i
//     this.color = instructions[i].c
//     this.size = instructions[i].s
//   }
//   draw(){
//     cc.beginPath()
//     cc.fillStyle = this.color
//     // cc.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//     cc.rect((this.x - (this.size/2)), (this.y - (this.size/2)), this.size, this.size)
//     cc.fill()
//     cc.closePath()
//   }
// }

// var suicidal_interval = setInterval(()=>{
//   if(i < instructions.length){
//     particles.push(new particle_making)
//     particles[i].draw()
//     i++
//   } else{
//     clearInterval(suicidal_interval)
//   }
// }, 25)

var particles = []
var i_group = 0
var i_self = 0
var i_absolute = 0

var mouse_pos = {
  x: undefined,
  y: undefined
}

class particle{
  constructor(){
    this.x = mouse_pos.x
    this.y = mouse_pos.y
    this.index_self = i_self
    this.index_group = i_group
    let hex_str = [cor.substr(1, 1), cor.substr(2, 1), cor.substr(3, 1), cor.substr(4, 1), cor.substr(5, 1), cor.substr(6)]
    for(let i=0; i<hex_str.length; i++){
      if(!["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(hex_str[i])){
        if(hex_str[i].toLowerCase() == "a"){
          hex_str[i] = 10
        } else if(hex_str[i].toLowerCase() == "b"){
          hex_str[i] = 11
        } else if(hex_str[i].toLowerCase() == "c"){
          hex_str[i] = 12
        } else if(hex_str[i].toLowerCase() == "d"){
          hex_str[i] = 13
        } else if(hex_str[i].toLowerCase() == "e"){
          hex_str[i] = 14
        } else{
          hex_str[i] = 15
        }
      }

      this.variation_col = variation_col

      let r = ((Number(hex_str[0]) * 16) + Number(hex_str[1]))
      let g = ((Number(hex_str[2]) * 16) + Number(hex_str[3]))
      let b = ((Number(hex_str[4]) * 16) + Number(hex_str[5]))

      if(r >= this.variation_col && r <= (255 - this.variation_col)){
        var some_num = Math.random() * (this.variation_col * 2) - this.variation_col
      } else if(r < this.variation_col){
        var some_num = Math.random() * (this.variation_col - (r * -1)) + (r * -1)
      } else{
        var some_num = Math.random() * (this.variation_col + (255 - r)) - this.variation_col
      }
      if(g >= this.variation_col && g <= (255 - this.variation_col)){
        var some_num = Math.random() * (this.variation_col * 2) - this.variation_col
      } else if(g < this.variation_col){
        var some_num = Math.random() * (this.variation_col - (g * -1)) + (g * -1)
      } else{
        var some_num = Math.random() * (this.variation_col + (255 - g)) - this.variation_col
      }
      if(b >= this.variation_col && b <= (255 - this.variation_col)){
        var some_num = Math.random() * (this.variation_col * 2) - this.variation_col
      } else if(b < this.variation_col){
        var some_num = Math.random() * (this.variation_col - (b * -1)) + (b * -1)
      } else{
        var some_num = Math.random() * (this.variation_col + (255 - b)) - this.variation_col
      }
      if(this.variation_col == "0"){
        this.color = `rgb(${r}, ${g}, ${b})`
      } else{
        this.color = `rgb(${Math.floor(r + some_num)}, ${Math.floor(g + some_num)}, ${Math.floor(b + some_num)})`
      }
    }
    this.size_variation = Number(variation_sz)
    this.size = part_sz * ((Math.random() * ((1 + this.size_variation) - (1 - this.size_variation))) + (1 - this.size_variation)) //(math.random * (max-min)) + min
  }
  draw(){
    cc.beginPath()
    cc.fillStyle = this.color
    // cc.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    cc.rect((this.x - (this.size/2)), (this.y - (this.size/2)), this.size, this.size)
    cc.fill()
    cc.closePath()
  }
}

var gbcrt = c.getBoundingClientRect().top
var gbcrl = c.getBoundingClientRect().left
window.addEventListener("scroll", ()=>{
  gbcrl = c.getBoundingClientRect().left
  gbcrt = c.getBoundingClientRect().top
})

var mouse_down = false
var variation_col
var variation_sz
var cor
var part_sz
const instructions_sctchs_pts = []
const instructions = []
var scratches_points = []

c.addEventListener("pointerdown",(event)=>{
  event.preventDefault()

  part_sz = Number(document.querySelector("#part_sz").value)
  variation_sz = Number(document.querySelector("#sz_var").value)
  cor = document.querySelector("#col").value
  variation_col = Number(document.querySelector("#col_var").value)

  mouse_down = true

  mouse_pos.x = event.x - gbcrl
  mouse_pos.y = event.y - gbcrt

  particles.push(new particle)
  particles[i_absolute].draw()

  scratches_points.push({
    x: particles[i_absolute].x,
    y: particles[i_absolute].y, 
    i_s: particles[i_absolute].index_self,
    i_g: particles[i_absolute].index_group,
    c: particles[i_absolute].color,
    s: particles[i_absolute].size
  })

  instructions.push({
    x: particles[i_absolute].x,
    y: particles[i_absolute].y, 
    i_s: particles[i_absolute].index_self,
    i_g: particles[i_absolute].index_group,
    c: particles[i_absolute].color,
    s: particles[i_absolute].size
  })

  i_self++
  i_absolute++
})

c.addEventListener("pointermove", (event)=>{
  event.preventDefault()
  
  if(mouse_down){
    mouse_pos.x = event.x - gbcrl
    mouse_pos.y = event.y - gbcrt

    particles.push(new particle)
    particles[i_absolute].draw()

    scratches_points.push({
      x: particles[i_absolute].x,
      y: particles[i_absolute].y, 
      i_s: particles[i_absolute].index_self,
      i_g: particles[i_absolute].index_group,
      c: particles[i_absolute].color,
      s: particles[i_absolute].size
    })

    instructions.push({
      x: particles[i_absolute].x,
      y: particles[i_absolute].y, 
      i_s: particles[i_absolute].index_self,
      i_g: particles[i_absolute].index_group,
      c: particles[i_absolute].color,
      s: particles[i_absolute].size
    })

    i_self++
    i_absolute++
  }
})

c.addEventListener("pointerup", ()=>{
  mouse_down = false
  i_self = 0
  i_group++

  instructions_sctchs_pts.push(scratches_points)
  setTimeout(() => {
    scratches_points = []
  }, 0);
})

function delete_last_d(){
  particles.pop()
  instructions_sctchs_pts[(instructions_sctchs_pts.length -1)].pop()
  if(instructions_sctchs_pts[(instructions_sctchs_pts.length -1)].length == 0){
    instructions_sctchs_pts.pop()
    i_group--
    i_self = 0
  } else{
    i_self--
  }
  instructions.pop()
  cc.clearRect(0, 0, c.width, c.height)
  i_absolute--
  for(i=0;i<particles.length;i++){
    particles[i].draw()
  }
}

function delete_last_s(){
  let i_l = instructions_sctchs_pts[(instructions_sctchs_pts.length -1)].length
  particles.splice((particles.length) - i_l, i_l)
  instructions.splice((instructions.length) - i_l, i_l)
  instructions_sctchs_pts.pop()
  i_self = 0
  i_absolute -= i_l
  i_group--
  cc.clearRect(0, 0, c.width, c.height)
  setTimeout(() => {
    for(i=0;i<particles.length;i++){
      particles[i].draw()
    }
  }, 0);
}

const bg_img = document.querySelector("#bg_img")
const bg_url = document.querySelector("#bg_url")
bg_url.addEventListener("input", ()=>{
  bg_img.style.backgroundImage = `url(${bg_url.value})`
})

const bg_x = document.querySelector("#bg_x")
bg_x.addEventListener("input", ()=>{
  bg_img.style.backgroundPositionX = `${bg_x.value}%`
})

const bg_y = document.querySelector("#bg_y")
bg_y.addEventListener("input", ()=>{
  bg_img.style.backgroundPositionY = `${bg_y.value}%`
})

const bg_sz = document.querySelector("#bg_sz")
bg_sz.addEventListener("input", ()=>{
  bg_img.style.backgroundSize = bg_sz.value
})

const bg_opcty = document.querySelector("#bg_opcty")
bg_opcty.addEventListener("input", ()=>{
  bg_img.style.opacity = `${bg_opcty.value}`
})

const bg_rpty = document.querySelector("#bg_rpty")
bg_rpty.addEventListener("input", ()=>{
  if(bg_rpty.checked == true){
    bg_img.style.backgroundRepeat = "repeat"
  }
})

const bg_rptn = document.querySelector("#bg_rptn")
bg_rptn.addEventListener("input", ()=>{
  if(bg_rptn.checked == true){
    bg_img.style.backgroundRepeat = "no-repeat"
  }
})
