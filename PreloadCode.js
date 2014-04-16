var preloadSprites = function () {
	game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('redCross', 'assets/health.png');
    game.load.image('gunIcon', 'assets/pistolicon.png');
    game.load.spritesheet('bullet', 'assets/bullet.png', 10, 3);
    game.load.spritesheet('pistol', 'assets/pistol.png', 80, 16)
    game.load.spritesheet('hatter', 'assets/Hatter.png', 32, 58);
    game.load.spritesheet('grunt','assets/grunt.png', 32, 58);
    game.load.spritesheet('health', 'assets/healthbar.png', 21, 4);
    game.load.spritesheet('playerhealth', 'assets/hbar.png', 96, 20);
    game.load.spritesheet('bulletcount', 'assets/bulleticon.png', 100, 20);	
    game.load.spritesheet('collectbullet', 'assets/bulletitem.png', 10, 30);
    game.load.spritesheet('healthpickup', 'assets/healthpickup.png', 20, 30);
};