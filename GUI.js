var guiY = 10; 
var updateBullets = function () {
	if (ammoCount < 9 && ammoCount > -1) {
		playerAmmo.frame = ammoCount;
	}
}