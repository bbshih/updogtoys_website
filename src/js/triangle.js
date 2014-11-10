var canvas = document.createElement('canvas');
var canvasHeight = canvas.height = 280;
var ctx = canvas.getContext('2d');
var heightScale = 0.866;


function rnd(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};


function renderBackground() {
    var canvasWidth = canvas.width = window.innerWidth;
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.lineWidth = 1;

    var hueStart = rnd(0, 360);
    var triSide = 82;
    var halfSide = triSide / 2;
    var rowHeight = Math.floor(triSide * heightScale);
    var columns = Math.ceil(canvasWidth / triSide) + 1;
    var rows = Math.ceil(canvasHeight / rowHeight);

    var col, row;
    for (row = 0; row < rows; row++) {
        var hue = hueStart + (row * 3);

        for (col = 0; col < columns; col++) {

            var x = col * triSide;
            var y = row * rowHeight;
            var clr;

            if (row % 2 != 0) {
                x -= halfSide;
            }

            // upward pointing triangle
            var color = rnd(150, 200);
            clr = 'rgb(' + color + ', ' + color + ', ' + color + ')';
            ctx.fillStyle = clr;
            ctx.strokeStyle = clr;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + halfSide, y + rowHeight);
            ctx.lineTo(x - halfSide, y + rowHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke(); // needed to fill antialiased gaps on edges

            // downward pointing triangle
            var color2 = rnd(100, 255);
            clr = 'rgb(' + color2 + ', ' + color2 + ', ' + color2 + ')';
            ctx.fillStyle = clr;
            ctx.strokeStyle = clr;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + triSide, y);
            ctx.lineTo(x + halfSide, y + rowHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        };
    };
};

canvas.id = 'triangle-bg';

$(document).ready(function($) {

    $(window).resize(function() {
        renderBackground();
    });
    $('#cta').before(canvas);
    renderBackground();
    $('#triangle-bg').css('cursor', 'pointer');
    $('#triangle-bg').click(renderBackground);
    $('#cta').click(renderBackground);
});
