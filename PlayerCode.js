var playerHealthNum = 9;
var playerRight;
var playerLeft;
var currentWeapon; 
var pistolActive = true;
var smgActive = true;
var switchCounter = 0;
var weapons = [
	{	
		name: 'pistol',
		sprite: 'pistol',
		x: 24,
		ammo: 'bullets',
		clip: 8,
		icon: 'pistolIcon',
		fireRate: 20,
		ammoMod: 1/3
	},
	{
		name: 'smg',
		sprite: 'smg',
		x: 34,
		ammo: 'bullets',
		clip: 24,
		icon: 'smgIcon',
		fireRate: 10,
		ammoMod: 3
	}
];

var createPlayer = function () {
	currentWeapon = weapons[0];
	player = game.add.sprite(32, game.world.height - 120, 'hatter');
    playerHealth = game.add.sprite(30, guiY, 'playerhealth');
    weaponIcon = game.add.sprite(8, guiY + 30, currentWeapon.icon);
    playerAmmo = game.add.sprite(38, guiY + 30, 'bulletcount');
    playerAmmo.frame = 8;
    game.add.sprite (8, guiY, 'redCross');
    playerGun = game.add.sprite(19, game.world.height - 100, 'pistol');
    currentWeapon = weapons[0];
    player.body.bounce.y = 0;
    player.body.gravity.y = 10;
    player.body.collideWorldBounds = true;
    //  Our two animations, walking left and right.
    player.animations.add('left', [3, 4, 5], 6, true);
    player.animations.add('right', [0, 1, 2], 6, true);
};


var playerHealthMatch = function () {
	if (playerHealthNum > 0) {
		playerHealth.frame = 9 - playerHealthNum; 
	}
};

var damagePlayer = function (player, bullet) {
	playerHealthNum--;
	bullet.kill();
};

var checkPlayerDamage = function () {	
	game.physics.overlap (player, bullets, damagePlayer, null, this);
};

var killPlayer = function () {
	player.kill();
	playerGun.kill();
};

var switchWeapon = function () {	
	var ammoScaler = ammoCount; 
	playerGun.kill();
	weaponIcon.kill();

	if (pistolActive) {
		playerGun = game.add.sprite(19, game.world.height - 100, 'smg');
		currentWeapon = weapons[1];
		ammoCount = Math.round(ammoScaler *= currentWeapon.ammoMod);
		pistolActive = false;
		smgActive = true;
	} else {
		playerGun = game.add.sprite(19, game.world.height - 100, 'pistol');
		currentWeapon = weapons[0];
		ammoCount = Math.round(ammoScaler *= currentWeapon.ammoMod);
		pistolActive = true;
		smgActive = false;
	}
	weaponIcon = game.add.sprite(8, guiY + 30, currentWeapon.icon);


};

var walkLeft = function () {
	player.body.velocity.x = -150;
    player.animations.play('left');
	playerLeft = true;
};

var walkRight = function () {
	player.body.velocity.x = 150;
	player.animations.play('right');
	playerRight = true;
};

var playerStop = function () {
	player.animations.stop();
	player.frame = 6;
};

var resetPlayerMovement = function () {
	player.body.velocity.x = 0;
    playerLeft = false;
    playerRight = false;
}