function main_MiniPaint(){

    var canvas = document.getElementById("canvas_paint");
	var ctx = canvas_paint.getContext("2d");
         
    var onDraw = false;
    var mouseCords = {x:0, y:0};

    canvas.addEventListener("mousedown", function(e){

        mouseCords.x = e.pageX - this.offsetLeft;
        mouseCords.y = e.pageY - this.offsetTop;
        onDraw = true;
        var color = document.getElementById("chosenColor").value;
        var width = document.getElementById("lineWidth").value;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(mouseCords.x, mouseCords.y);
    })

    canvas.addEventListener("mousemove", function(e){
         
        if(onDraw == true){
         
            mouseCords.x = e.pageX - this.offsetLeft;
            mouseCords.y = e.pageY - this.offsetTop;
            ctx.lineTo(mouseCords.x, mouseCords.y);
            ctx.stroke();
        }
    })

    canvas.addEventListener("mouseup", function(e){
         
        mouseCords.x = e.pageX - this.offsetLeft;
        mouseCords.y = e.pageY - this.offsetTop;
        ctx.lineTo(mouseCords.x, mouseCords.y);
        ctx.stroke();
        ctx.closePath();
        onDraw = false;
    })


    // ↓↓↓ simple code ↓↓↓

    // var ctx = canvas_paint.getContext("2d");
    // var xBegin, yBegin;
    // var xEnd, yEnd;

    // function draw(){ 
    //     var color = document.getElementById("chosenColor").value;
    //     var width = document.getElementById("lineWidth").value;
    //     ctx.beginPath();
    //     ctx.strokeStyle = color;
    //     ctx.lineWidth = width;
    //     ctx.moveTo(xBegin,yBegin);
    //     ctx.lineTo(xEnd,yEnd);
    // }

    // canvas_paint.onmousedown = function(e){
    //     var m = mouseCoords(e);

    //     xBegin = m.x;
    //     yBegin = m.y;

    //     console.log(xBegin, yBegin);

    //     canvas_paint.onmousemove = mouseMove;
    // }

    // function mouseCoords(e){
    //     var m = [];
    //     var rect = canvas_paint.getBoundingClientRect();

    //     m.x = e.clientX - rect.left;
    //     m.y = e.clientY - rect.top;

    //     return m;
    // }

    // function mouseMove(e){
    //     var m = mouseCoords(e);

    //     xEnd = m.x;
    //     yEnd = m.y;

    //     draw();
    // }
    
    // canvas_paint.onmouseup = function(){
    //     ctx.stroke();
    // }

}

function getImage(canvas){
    var imageData = canvas.toDataURL();
    var image = new Image();
    image.src = imageData;
    return image;
}
 
function saveImage(image) {
    var link = document.createElement("a");
 
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();
}
 
function saveCanvasAsImageFile(){
    var image = getImage(document.getElementById("canvas_paint"));
    saveImage(image);
}

function clearCanvas(){
	var canvas = document.getElementById("canvas_paint");
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
}