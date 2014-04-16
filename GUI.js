var guiY = 10; 
var enemiesAlive = false;

var updateBullets = function () {
	if (ammoCount < 9 && ammoCount > -1) {
		playerAmmo.frame = ammoCount;
	}
};

var addWinText = function () {
	
	 	scoreText = game.add.text(300, 300, 'Mission Accomplished!', { fontSize: '32px', fill: 'white', stroke: "black", strokeThickness: 5 });
};

var checkForWin = function () {
	enemiesAlive = false;
	for (var i = 0; i < enemies.length; i++){
		if (enemies[i].alive === true) {
			enemiesAlive = true;
		}
	}
	if (enemiesAlive === false) {
		addWinText();
	}
};
