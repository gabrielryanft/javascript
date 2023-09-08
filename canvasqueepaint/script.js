
document.addEventListener('DOMContentLoaded', ()=>{

    const brush = {
        on: false,
        moving: false,
        pos: {x:0, y:0},
        posOld: null
    }

    const screen = document.querySelector('#screen')
    const context = screen.getContext('2d')

    screen.width = 700
    screen.height = 500

    const drawLine = (line) => {

        context.beginPath()
        context.moveTo(line.posOld.x, line.posOld.y)
        context.lineTo(line.pos.x, line.pos.y)
        context.stroke()
    }

    screen.onmousedown = () => {brush.on = true}
    screen.onmouseup = () => {brush.on = false}

    screen.onmousemove = (events) => {
        const rect = screen.getBoundingClientRect()
        brush.pos.x = events.clientX - rect.left
        brush.pos.y = events.clientY - rect.top
        brush.moving = true
    }

    const loop = () => {
        if (brush.moving && brush.posOld && brush.on){
            drawLine({pos: brush.pos, posOld: brush.posOld})
            brush.moving = false
        }
        brush.posOld = {x: brush.pos.x, y: brush.pos.y}
        context.lineWidth = document.querySelector('#range').value
        context.strokeStyle = document.querySelector('#color').value
        setTimeout(loop, 1)
    }
    loop()
})