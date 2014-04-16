var playerHealthNum = 9;
var playerRight;
var playerLeft;
var currentWeapon; 

var createPlayer = function () {
	player = game.add.sprite(32, game.world.height - 120, 'hatter');
    playerHealth = game.add.sprite(30, guiY, 'playerhealth');
    game.add.sprite(8, guiY + 30, 'gunIcon');
    playerAmmo = game.add.sprite(30, guiY + 30, 'bulletcount');
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

var weapons = [
	{	
		name: 'pistol',
		sprite: 'pistol',
		x: 24,
		ammo: 'bullets',
		clip: 8,
		icon: 'pistolicon',
		fireRate: 20
	},
	{
		name: 'smg',
		sprite: 'smg',
		x: 34,
		ammo: 'bullets',
		clip: 25,
		icon: 'smgicon',
		fireRate: 10
	}
];
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
	playerGun.kill();
	playerGun = game.add.sprite(19, game.world.height - 100, 'smg');
	currentWeapon = weapons[1];
	ammoCount = currentWeapon.clip;
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