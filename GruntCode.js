//<script type="text/javascript" src= "js/phaser.min.js"></script>


// var GruntCode = {
// 	walkRight:function (grunt) {
// 		enemy.body.velocity = 150;
// 		enemy.animations.play();
// 	},
// 	walkLeft: function (grunt) {
// 		enemy.body.velocity = -150;
// 		enemy.animations.play();
// 	}
// };

var walkRight = function (enemy) {
	enemy.body.velocity.x = 150;
	enemy.animations.play('goRight');
};

var walkLeft = function (enemy) {
	enemy.body.velocity.x = -150;
	enemy.animations.play('goLeft');
};