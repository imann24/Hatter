var walkRight = function (enemy) {
	enemy.body.velocity.x = 150;
	enemy.animations.play('goRight');
};

var walkLeft = function (enemy) {
	enemy.body.velocity.x = -150;
	enemy.animations.play('goLeft');
};