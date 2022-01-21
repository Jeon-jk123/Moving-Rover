Canvas=document.getElementById("Canvas");
ctx=Canvas.getContext("2d");
width=50;
height=48;
xposition=10;
yposition=10;


function add() {
    background_img=new Image();
    background_img.src="mars.jpg";
    background_img.onload=jk;

    rover=new Image();
    rover.src="rover.png";
    rover.onload=v;
}

function jk() {
    ctx.drawImage(background_img,0,0,Canvas.width,Canvas.height);
}

function v() {
    ctx.drawImage(rover,xposition,yposition,width,height,);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
if  (keypress==39){
    right();
    console.log("right");
}
if  (keypress==37){
    left();
    console.log("left");
}
if  (keypress==40){
    down();
    console.log("down");
}
if  (keypress==38){
    up();
    console.log("up");
}
}

function up() {
if (yposition >=0) {
      yposition=yposition-10;
      console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
      jk();
      v();
}
}

function down() {
    if (yposition <=300) {
          yposition=yposition+10;
          console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
          jk();
          v();
        }
    }

    function left() {
        if (xposition >=0) {
              xposition=xposition-10;
              console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
              jk();
              v();
            }
        }

        function right() {
            if (xposition <=500) {
                  xposition=xposition+10;
                  console.log("xposition of the rover is,"+xposition+"yposition of the rover is"+yposition);
                  jk();
                  v();
                }
            }