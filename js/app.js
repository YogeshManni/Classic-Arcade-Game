

var playerScore=document.getElementById("playerScore");     //player scores
var count=document.getElementById("count"); // variable to update items collected score

var c=0;//checkers
var p=0;//checkers
var scores=0;
var visited1=0,visited2=0,visited3=0;


var Enemy = function(x,y) {             //function to initialise enemy
        this.x=x;
        this.y=y;
       this.sprite = 'images/enemy-bug.png';    //enemy image
        };

Enemy.prototype.update = function(dt) {             //Function to update enemy position

      if (this.x < 505) {
        this.x += (150 * dt);
    }
    else {this.x = -100;}

    // To check if Enemy and our PLayer Collide
    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {  
        scores = 0;
        playerScore.innerHTML = scores;
        player.reset();     //reseting the player score and his position.....
    }

};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  //function to draw enemy image
};


var proPlayer=function()
{
    this.sprite = 'images/char-horn-girl.png';  //function to create a new player and initialise its starting position....
    this.x=200;
    this.y=320;
}

proPlayer.prototype.handleInput=function(val)       //handling or updating our player's position
{   c=0;
    p=0;
    if(val=="left" && this.x>0)
        this.x=this.x-50;
    else if(val=="right" && this.x<400)
        this.x=this.x+50
    else if(val=="up" && this.y>3)
        this.y=this.y-50
    else if(val=="down" && this.y<400)
        this.y=this.y+50
       
};



proPlayer.prototype.reset=function()        //function to reset the player position to starting position
{
    this.x=200;
    this.y=320;
    g1.x=200;
        g1.y=150;
      g3.x=400;
        g3.y=70;

        g2.x=20;
        g2.y=70;
        stars=0;
        count.innerHTML=0;
        visited1=visited2=visited3=0;

};

proPlayer.prototype.update=function()       //if player wins the game then updating its score by one and reseting it to starting position
{
    console.log(count.innerHTML);
  
     if(player.x==200 && player.y==170 && visited1==0)
    {
        g1.x=500;
        g1.y=5;
        if(count.innerHTML==0 && c==p)  //updating score 
        {count.innerHTML=1;
            p++;
        }
        else if(count.innerHTML==1 && c==p)
        {
            count.innerHTML=2;
            p++;
        }
        else if(count.innerHTML==2 && c==p)
        {
            count.innerHTML=3;
            p++;
        }
        visited1=1;
    }

    if(player.x==400 && player.y==120 && visited2==0)
    {
        g3.x=500;
        g3.y=5;
     if(count.innerHTML==0 && c==p)     //updating score 
        {count.innerHTML=1;
            p++;
        }
        else if(count.innerHTML==1 && c==p)
        {
            count.innerHTML=2;
            p++;
        }
        else if(count.innerHTML==2 && c==p)
        {
            count.innerHTML=3;
            p++;
        }
        visited2=1;
    }
    if(player.x==0 && player.y==120 && visited3==0)
    {
        g2.x=500;
        g2.y=5;
       if(count.innerHTML==0 && c==p)           //updating score 
        {count.innerHTML=1;
            p++;
        }
        else if(count.innerHTML==1 && c==p)
        {
            count.innerHTML=2;
            p++;
        }
        else if(count.innerHTML==2 && c==p)
        {
            count.innerHTML=3;
            p++;
        }
        visited3=1;
    }
    if(player.y<20)
    {
        scores++;
        playerScore.innerHTML=scores;
        this.reset();
    }
};


proPlayer.prototype.render = function() {           //drawing  the player's image
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Gem=function(x,y)
{        this.sprite='images/Star.png';
    this.x=x;
    this.y=y;   
}


Gem.prototype.render = function() {
        
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  //function to draw gem image
};

var g1=new Gem(200,150);
var g2=new Gem(20,70);
var g3=new Gem(400,70);


var E1 = new Enemy(-90, 60);        //initialising enemy's position
var E2 = new Enemy(-190, 140);
var E3 = new Enemy(-290, 230);
var E4 = new Enemy(-390, 140);
var E5 = new Enemy(-490, 60);
var E6 = new Enemy(-890, 230);

var allEnemies = [E1, E2, E3, E4, E5, E6];  //creating an array of enemies..............




var player=new proPlayer(); //creating a new player



document.addEventListener('keyup', function(e) {    //function to listen to the keys that user pressed........
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //calling function to handle the input of the key pressed...........
});
