var playerHealth = 9;

var playerHealthMatch = function () {
	if (playerHealth > 0) {
		playerHealth.frame = 9 - playerHealth; 
	}
};

var damagePlayer = function (player, bullet) {
	playerHealth--;
	bullet.kill();
};

var checkPlayerDamage = function () {

};