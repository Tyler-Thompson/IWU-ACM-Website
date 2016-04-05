var canvas = document.getElementById('pong_canvas');
var ctx = canvas.getContext('2d');
var isFocused = false;

document.getElementById('pong_canvas').focus();

canvas.width = 620;
canvas.height = 460;

/*
canvas.setAttribute('tabindex','0');
canvas.focus();
*/
 
var mySprite = {
    x: 10,
    y: 160,
    width: 10,
    height: 160,
    speed: 300,
    color: '#ffffff',
    score: 0
};

var opponentSprite = {
    x: 600,
    y: 160,
    width: 10,
    height: 160,
    speed: 300,
    color: '#ffffff',
    score: 0,
    direction: 0,
    delay: 0
};

var ballSprite = {
    width: 20,
    height: 20,
    x: (canvas.width/2)-10,
    y: (canvas.height/2)-10,
    speed: 150,
    verticalSpeed: Math.floor(Math.random() * 300) - 150,
    direction: Math.random() < 0.5 ? -1 : 1,
    color: '#ffffff'
};

var pauseScreen = {
    width: canvas.width,
    height: canvas.height,
    x: 0,
    y: 0,
    color: '#000000',
    drawAlpha: 0.75
}

var keysDown = {};

function getFocus()
{
    isFocused = true;
    canvas.setAttribute('tabindex','0');
    canvas.focus();
}
function loseFocus()
{
    isFocused = false;
}

canvas.addEventListener('click', function(e) {
    canvas.setAttribute('tabindex','0');
    canvas.focus();
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
    if (isFocused == true) { e.preventDefault(); }
});
 
function update(mod) {
    if (isFocused==false)
    {
        return;
    }
    /********************************
        PLAYER CODE
    *********************************/
    if (38 in keysDown) //up
    {
        if (mySprite.y>=mySprite.speed*mod)//collision checking
        {
            mySprite.y -= mySprite.speed * mod;
        } else {
            mySprite.y = 0;
        }
    }
    if (40 in keysDown) //down
    {
        if (mySprite.y<=canvas.height-mySprite.speed*mod-mySprite.height)//collision checking
        {
            mySprite.y += mySprite.speed * mod;
        } else {
            mySprite.y = canvas.height-mySprite.height;
        }
    }

    /********************************
        BALL CODE
    *********************************/
    if (ballSprite.direction==1)
    {
        if (ballSprite.x+ballSprite.width+ballSprite.speed*mod<=opponentSprite.x)
        {
            ballSprite.x+=ballSprite.speed*mod;
        } else {
        if ((ballSprite.y+ballSprite.height>opponentSprite.y)&&(ballSprite.y<opponentSprite.y+opponentSprite.height))
            {
                ballSprite.direction=-1;
                ballSprite.speed+=40;
                if (ballSprite.verticalSpeed<0) { ballSprite.verticalSpeed -= Math.floor(Math.random() * 500) - 250; } else { ballSprite.verticalSpeed += Math.floor(Math.random() * 500) - 250; }
            } else {
                ballSprite.x+=ballSprite.speed*mod;
            }
        }
    }
    if (ballSprite.direction==-1)
    {
        if (ballSprite.x-ballSprite.speed*mod>=mySprite.x+mySprite.width)
        {
            ballSprite.x-=ballSprite.speed*mod;
        } else {
        if ((ballSprite.y+ballSprite.height>mySprite.y)&&(ballSprite.y<mySprite.y+mySprite.height))
            {
                ballSprite.direction=1;
                ballSprite.speed+=40;
                if (ballSprite.verticalSpeed<0) { ballSprite.verticalSpeed -= Math.floor(Math.random() * 500) - 250; } else { ballSprite.verticalSpeed += Math.floor(Math.random() * 500) - 250; }
            } else {
                ballSprite.x-=ballSprite.speed*mod;
            }
        }
    }

    if ((ballSprite.y+ballSprite.height+ballSprite.verticalSpeed*mod<canvas.height)&&(ballSprite.y+ballSprite.verticalSpeed*mod>0))
    {
        ballSprite.y+=ballSprite.verticalSpeed*mod;
    } else {
        ballSprite.verticalSpeed*=-1;
        ballSprite.y+=ballSprite.verticalSpeed*mod;
    }

    if ((ballSprite.x>canvas.width)||(ballSprite.x+ballSprite.width<0))
    {
        if (ballSprite.x>canvas.width) { mySprite.score+=1; }
        if (ballSprite.x+ballSprite.width<0) { opponentSprite.score+=1; }
        ballSprite.x = (canvas.width/2)-10;
        ballSprite.y = (canvas.height/2)-10;
        ballSprite.speed = 150;
        ballSprite.verticalSpeed = Math.floor(Math.random() * 600) - 300;
        ballSprite.direction = Math.random() < 0.5 ? -1 : 1;
    }

    /********************************
        OPPONENT CODE
    *********************************/
    opponentSprite.delay+=5*mod;
    if (opponentSprite.delay>1)
    {
        if (ballSprite.y+ballSprite.height/2>opponentSprite.y+opponentSprite.height/2)
        {
            opponentSprite.direction=1;
        } else {
            opponentSprite.direction=-1;
        }
        if ((ballSprite.y+ballSprite.height/2>opponentSprite.y+45)&&(ballSprite.y+ballSprite.height/2<opponentSprite.y+opponentSprite.height-45))
        {
            opponentSprite.direction=0;
        }
        opponentSprite.delay=0;
    }

    if (ballSprite.direction==1) { opponentSprite.y+=opponentSprite.direction*opponentSprite.speed*mod; }

    if (opponentSprite.y+opponentSprite.height>canvas.height)
    {
        opponentSprite.y=canvas.height-opponentSprite.height;
    }
    if (opponentSprite.y<0)
    {
        opponentSprite.y=0;
    }
}

function render() {
    //draw canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //draw player
    ctx.fillStyle = mySprite.color;
    ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
    //draw ball
    ctx.fillStyle = ballSprite.color;
    ctx.fillRect(ballSprite.x, ballSprite.y, ballSprite.width, ballSprite.height);
    //draw opponent
    ctx.fillStyle = opponentSprite.color;
    ctx.fillRect(opponentSprite.x, opponentSprite.y, opponentSprite.width, opponentSprite.height);
    //draw scores
    ctx.textAlign = "center";
    ctx.fillStyle = mySprite.color;
    ctx.font = '40px "Lucida Console", Monaco, monospace';
    ctx.fillText(mySprite.score,canvas.width/3,45);
    ctx.fillStyle = opponentSprite.color;
    ctx.font = '40px "Lucida Console", Monaco, monospace';
    ctx.fillText(opponentSprite.score,canvas.width*2/3,45);
    //Pause screen overlay
    if (isFocused==false)
    {
        ctx.fillStyle = pauseScreen.color;
        ctx.globalAlpha = pauseScreen.drawAlpha;
        ctx.fillRect(pauseScreen.x,pauseScreen.y,pauseScreen.width,pauseScreen.height);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = "center";
        ctx.font = '30px "Lucida Console", Monaco, monospace';
        ctx.fillText("Paused; Click To Play",canvas.width/2,canvas.height/2);
    }
}
 
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 17);