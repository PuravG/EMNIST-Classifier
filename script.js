function clear2 () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0,0,canvas.width, canvas.height)
}



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

if(canvas){
    canvas.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    // this is so that the drawing will stop no matter where the mouseup event occurs.

    canvas.addEventListener('mousemove', sketch);
}

if(canvas){
    canvas.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mousemove', sketch);
}

// Stores the initial position of the cursor
// this is a dictionary
let coord = {x:0 , y:0}; 
   
// This is the flag that we are going to use to 
// trigger drawing
let paint = false;
// Updates the coordianates of the cursor when 
// an event e is triggered to the coordinates where 
// the said event is triggered.
function getPosition(event){
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

// The following functions toggle the flag to start
// and stop drawing
function startPainting(event){
    paint = true;
    getPosition(event);
}
function stopPainting(){
    paint = false;
}

function sketch(event){
    if (!paint) return;
    ctx.beginPath();
        
    ctx.lineWidth = 12;
        
    // Sets the end of the lines drawn
    // to a round shape.
    ctx.lineCap = 'round';
        
    ctx.strokeStyle = 'white';
        
    // The cursor to start drawing
    // moves to this coordinate
    ctx.moveTo(coord.x, coord.y);
        
    // The position of the cursor
    // gets updated as we move the
    // mouse around.
    getPosition(event);
        
    // A line is traced from start
    // coordinate to this coordinate
    ctx.lineTo(coord.x , coord.y);
        
    // Draws the line.
    ctx.stroke();
}