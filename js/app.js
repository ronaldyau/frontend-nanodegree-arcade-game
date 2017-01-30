// Enemies our player must avoid
var Enemy = function(col, row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.col = col;
    this.row = row;
    this.x = col * 101;
    this.y = row * 75;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (dt * 100);
    if (this.x > 505) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function() {
    this.x = this.col * 101;
    this.y = this.row * 75;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(col, row) {
    this.sprite = 'images/char-boy.png';
    this.startCol = col;
    this.startRow = row;
    this.col = col;
    this.row = row;
}

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    this.x = this.col * 101;
    this.y = this.row * 80;
}

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);    
}

// handle's input to change player's column or row
Player.prototype.handleInput = function(direction) {
    switch(direction) {
        case 'left':
            if (this.col > 0) {
                this.col--;
            }
            break;
        case 'up':
            if (this.row > 0) {
                this.row--;
            }
            break;
        case 'right':
            if (this.col < 4) {
                this.col++;
            }
            break;
        case 'down':
            if (this.row < 5) {
                this.row++;
            }
            break;        
    }
}

// Resets to the player's original start column and row
Player.prototype.reset = function() {
    this.col = this.startCol;
    this.row = this.startRow;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [new Enemy(0,1), new Enemy(3,2), new Enemy(1,3)];
player = new Player(2,5);

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
