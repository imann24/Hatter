var createGameItems = function () {
	var enemyXPos = [200, 400];
    var enemyYPos = [game.world.height-120, game.world.height-320];
    var enemyGun = [];
    var grunt = [];
    var enemyHealth = [];
 
    addEnvironmentSprites();
    
    for (var i = 0; i < enemyYPos.length; i++) {
        grunt[i] = game.add.sprite(enemyXPos[i], enemyYPos[i], 'grunt');
        enemyHealth[i] = game.add.sprite(enemyXPos[i], enemyYPos[i]+20, 'health');
        enemyGun[i] = game.add.sprite(enemyXPos[i]-13, enemyYPos[i]+20, 'pistol');
        enemies[i] = new Enemy (grunt[i], enemyGun[i], enemyHealth[i], 7, 3, false, true, 0);
    }

    for (var i = 0; i < bulletXPos.length; i++) {
        bulletItems[i] = bulletPickUps.create(bulletXPos[i], bulletYPos[i], 'collectbullet');
    }
   
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].sprite.body.bounce.y = 0;
        enemies[i].sprite.body.gravity.y = 10;
        enemies[i].sprite.body.collideWorldBounds = true;
     
        //  Our two animations, walking left and right.
        enemies[i].sprite.animations.add('goLeft', [4, 5, 6], 6, true);
        enemies[i].sprite.animations.add('goRight', [0, 1, 2], 6, true);
    }

    for (var i = 0; i < bulletItems.length; i++) {
    	 bulletItems[i].animations.add('bounce', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 30, true);
    }

    createPlayer();

    fireKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
    respawnKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    testKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    cursors = game.input.keyboard.createCursorKeys();
    pistolMatch(player, playerGun, playerLeft, playerRight);
};