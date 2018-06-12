var socket = io.connect('http://localhost:3000');

var canvasHeight = 10;
var canvasWidth = 20 ;
var side = 20;
//var player = {x:0,y:0,step:side/10}
var obstacles =[{x:200,y:50},{x:100,y:100}]
var player,gameStarted = false;




function setup(){
    createCanvas(canvasWidth*side,canvasHeight*side);
}
function draw(){
    background("#acacac");
if(gameStarted){
    fill(player.color)
    rect(player.x,player.y,side,side);

    fill(0)
    for(let obstacle of obstacles){
        rect(obstacle.x,obstacle.y,side,side)
    }

    if(keyIsDown(RIGHT_ARROW)&&player.x+side<canvasWidth*side){
        for (var coords of obstacles) {
            if (Collision_right(coords)) return;
        }
        player.x+=player.step
    }
    if(keyIsDown(LEFT_ARROW)&&player.x>=0){
        for (var coords of obstacles) {
            if (Collision_left(coords)) return;
        }
        player.x-=player.step
    }
    if(keyIsDown(UP_ARROW)&&player.y>=0){
        for (var coords of obstacles) {
            if (Collision_up(coords)) return;
        }
        player.y-=player.step
    }
    if(keyIsDown(DOWN_ARROW)&&player.y+side<canvasHeight*side){
        for (var coords of obstacles) {
            if (Collision_down(coords)) return;
        }
        player.y+=player.step
    }
}}





socket.on("player data",function(data){
    player = data;
    gameStarted = true;
})