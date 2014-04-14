var createGameItems = function () {
	 //  A simple background for our game
    game.add.sprite(0, 0, 'sky');
 
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();
    bullets = game.add.group();
    bulletPickUps = game.add.group();
    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');
 
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);
 
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;
 
    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
 
    var ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;
    
    //adds weapons
    playerGun = game.add.sprite(19, game.world.height - 100, 'pistol');
    enemyGun = game.add.sprite(187, game.world.height - 100, 'pistol');
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 120, 'hatter');
    playerHealth = game.add.sprite(30, guiY, 'playerhealth');
    game.add.sprite(8, guiY + 30, 'gunIcon');
    playerAmmo = game.add.sprite(30, guiY + 30, 'bulletcount');
    playerAmmo.frame = 8;
    game.add.sprite (8, guiY, 'redCross');
    enemy = game.add.sprite(200, game.world.height - 120, 'grunt');
    health = game.add.sprite (200, game.world.height - 120, 'health');
    bulletItems[0] = bulletPickUps.create(300, game.world.height - 100, 'collectbullet');
    bulletItems[1] = bulletPickUps.create(400, game.world.height - 100, 'collectbullet');
    bulletItems[2] = bulletPickUps.create(300, game.world.height - 200, 'collectbullet');

    player.body.bounce.y = 0;
    player.body.gravity.y = 10;
    player.body.collideWorldBounds = true;
 
    //  Our two animations, walking left and right.
    player.animations.add('left', [3, 4, 5], 6, true);
    player.animations.add('right', [0, 1, 2], 6, true);

    enemy.body.bounce.y = 0;
    enemy.body.gravity.y = 10;
    enemy.body.collideWorldBounds = true;
 
    //  Our two animations, walking left and right.
    enemy.animations.add('goLeft', [4, 5, 6], 6, true);
    enemy.animations.add('goRight', [0, 1, 2], 6, true);

    for (var i = 0; i < bulletItems.length; i++) {
    	 bulletItems[i].animations.add('bounce', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 30, true);
    }

    fireKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
    cursors = game.input.keyboard.createCursorKeys();
    pistolMatch();
};