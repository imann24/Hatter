var goingRight = false;
var goingLeft = true;
var enemyAmmoCounter = 0; 
var enemyAmmo = 3; 

var enemyHealthNum = 0;

var enemyAmmoReplenish = function () {
	enemyAmmoCounter++; 
	if (enemyAmmoCounter === 300) {
		enemyAmmoCounter = 0;		
		enemyAmmo += 3;
	}
};

var walkRight = function (enemy) {
	enemy.body.velocity.x = 150;
	enemy.animations.play('goRight');
};

var walkLeft = function (enemy) {
	enemy.body.velocity.x = -150;
	enemy.animations.play('goLeft');
};

var damageEnemy = function (enemy, bullet) {
	bullet.kill();
    enemyHealthNum ++;
};

var enemyHealthMatch = function () {
    health.x = enemy.x + 5;
    health.y = enemy.y - 10;
};

var attackPlayer = function () {	
	enemy.body.velocity.x = 0;
	enemy.frame = 3;
}

var killEnemy = function (character, gun) {
	 enemy.kill();
     health.kill();
     enemyGun.kill();   
     enemyAlive = false;
};

var facingPlayer = function () {
	if ((goingRight && player.x > enemy.x) || (goingLeft && player.x < enemy.x)) {
		return true;
	} else {
		return false;
	}
};

function damageEnemy (enemy, bullet) {
    bullet.kill();
    enemyHealthNum ++;
};

