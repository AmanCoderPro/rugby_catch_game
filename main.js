canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
player_height = 90;
player_width = 100;
player_x = 400;
player_y = 500;
background_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/AmFBfield.svg/1200px-AmFBfield.svg.png";
player_image = "running_man-removebg-preview.png";
ball_height = 65;
ball_width = 80;
ball_x = 10;
ball_y = 10;
ball_image = "americanfootball.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    player_imgTag = new Image();
    player_imgTag.onload = uploadPlayer;
    player_imgTag.src = player_image;
    ball_imgTag = new Image();
    ball_imgTag.onload = uploadBall;
    ball_imgTag.src = ball_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadPlayer() {
    ctx.drawImage(player_imgTag, player_x, player_y, player_width, player_height);
}

function uploadBall() {
    ctx.drawImage(ball_imgTag, ball_x, ball_y, ball_width, ball_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log (keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    
    if(keyPressed == '40') {
        down();
        console.log("down");
    }

    if(keyPressed == '37') {
        left();
        console.log("left");
    }

    if(keyPressed == '39') {
        right();
        console.log("right");
    }

    if(keyPressed == '83') { 
        launch()
        console.log("launch")
    }
}

function left(){
    if(player_x>=0){
        player_x = player_x - 5;
        console.log("When left arrow is pressed, x = "+ player_x + " | y = "+ player_y);
        uploadBackground();
        uploadPlayer();
        uploadBall();
    }
}

function right(){
    if(player_x<=700){
        player_x = player_x + 5;
        console.log("When right arrow is pressed, x = "+ player_x + " | y = "+ player_y);
        uploadBackground();
        uploadPlayer();
        uploadBall();
    }
}

function launch(){
    getRandom = Math.floor((Math.random() * 2) + 1);
    if(getRandom == 1) {
        while(ball_x != 10) {
            ball_x = ball_x - 5;
        }
        while(ball_y != 500) {
            ball_y = ball_y + 8 ;
        }
    }
    if(getRandom == 2) {
        while(ball_x != 750) {
            ball_x = ball_x + 5;
        }
        while(ball_y != 500) {
            ball_y = ball_y + 8 ;
        }
    }
}