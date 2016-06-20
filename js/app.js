// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;

    // Setting the Enemy initial location
    // this.x = 1;
    // this.y = 1;

    //Setting the Enemy speed


    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    this.dt = dt;
    this.x = this.x + 1;
    // You should multiply any movement by the dt parameter
    // movement = movement * dt;
    //console.log(this.x);
    // this.x = this.x * this.dt;


    // console.log('x: ' + this.x);

    //some loop that moves the bug
    // for (i=0; i<=505; i++) {
    //   // this.x = this.x * this.dt;
    //   // this.x = this.x + 100;
    //   console.log(this.x);
    // }
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//need to detect bounds of canvas and when it is out of bounds
// console.log(canvas.width);
//if (!(this.x > canvas.width || this.x <0) && !(this.y>canvas.height || this.y <0) )

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 383;
}

    var movement = 1;

// using the power of prototype so don't have to create functions everytime instance is created; saves memory.
Player.prototype.update = function(dt) {
    // this.dt = dt;
    // // You should multiply any movement by the dt parameter
    // movement = movement * dt;
    // movement++;
};

Player.prototype.render = function(dt) {

    //check to make sure that the location doesn't go out of bounds of canvas
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   //console.log('position: ' + this.x + this.y);
};

Player.prototype.handleInput = function(key) {
    var key = key;
    switch(key) {
        case('left'):
          if (this.x > 0 ) {
              this.x = this.x-100;
          }
          break;
        case('up'):
            if (this.y > 0 ) {
              this.y = this.y-100;
            }
            break;
        case('right'):
          if (this.x < 400) {
            this.x = this.x+100;
          }
          break;
        case('down'):
          if (this.y < 350 ) {
            this.y = this.y+100;
          }
          break;
    }

};


// Now instantiate your objects.
var enemy = new Enemy(1, 1);
var enemy2 = new Enemy(200, 300);
var enemy3 = new Enemy(100, 100);

// Place all enemy objects in an array called allEnemies
allEnemies = [enemy, enemy2, enemy3];


// Place the player object in a variable called player
var player = new Player(5);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
