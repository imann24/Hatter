//<script type="text/javascript" src= "js/phaser.min.js"></script>

var walkRight = function (grunt) {
	enemy.body.velocity = 150;
	enemy.animations.play();
};

var walkLeft = function (grunt) {
	enemy.body.velocity = -150;
	enemy.animations.play();
};