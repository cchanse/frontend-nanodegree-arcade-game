// Enemies our player must avoid
var Enemy = function(x, y) {

    "use strict";

    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;

    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
Enemy.prototype.update = function() {
    "use strict";
    // this.dt = dt;
    this.x = this.x + 1;

    // if the bug's position is greater than the screen width, reset back to 0
    if ( this.x > 500 ) {
      this.x = -150;
    }

    // if position of bug and player are the same, then they have collided and the player should be reset to beginning location
    if ( this.x === player.x && this.y === player.y) {
      player.resetGame();
    }

};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Set up initial location for Player
var startingPlayerLocationX = 200;
var startingPlayerLocationY = 425;

// Player class that has update(), render() and handleInput() methods.
var Player = function() {
    "use strict";
    this.sprite = 'images/char-boy.png';
    this.x = startingPlayerLocationX;
    this.y = startingPlayerLocationY;
};

Player.prototype.resetGame = function() {
  this.x = startingPlayerLocationX;
  this.y = startingPlayerLocationY;
};

Player.prototype.playerWin = function() {
  "use strict";
  //return player back to start position
  this.resetGame();
}

// using the power of prototype so don't have to create functions everytime instance is created; saves memory.
Player.prototype.update = function(dt) {
    "use strict";
    // code for if player makes it to the edge
    if (this.y === -75 ) {
      console.log('You won!');
      this.playerWin();
    }

};

Player.prototype.render = function(dt) {

    "use strict";
    //check to make sure that the location doesn't go out of bounds of canvas
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



Player.prototype.handleInput = function(key) {
    "use strict";
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
var enemy = new Enemy(1, 25);
var enemy2 = new Enemy(-200, 325);
var enemy3 = new Enemy(-100, 125);

// Place all enemy objects in an array called allEnemies
allEnemies = [enemy, enemy2, enemy3];

// Place the player object in a variable called player
var player = new Player(5);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    "use strict";
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
