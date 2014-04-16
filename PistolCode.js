var left = false;
var right = false;
var firing = false;
var firingRate = 15;
var fireCounter = 0;
var enemyHealthNum = 0;
var bulletCounter = 0;
var ammoCount = 8; 

var bulletItems = [];
var bulletXPos = [50, 400, 400, 600, 150, 600];
var bulletYPos = [200, 500, 350, 350, 200, 500];

var pistolFire = function (character, gun, left, right, ammo) {
   
   if (bulletCounter === 1 && ammo > 0) {
        firing = true;
        if (right) {
          gun.frame = 1; 
          var bullet = bullets.create(gun.x + 80, gun.y, 'bullet');
          ammo--;
          bullet.body.velocity.x = 300; 
          bullet.frame = 0;
       } else if (left) {
            gun.frame = 3;
            var bullet = bullets.create(gun.x - 10, gun.y, 'bullet');
            ammo--;
            bullet.body.velocity.x = -300; 
            bullet.frame = 1;
       } else if (ammo > 1){
           gun.frame = 5;
           var bullet = bullets.create(gun.x - 8, gun.y + 5, 'bullet');
           bullet.body.velocity.x = -300; 
           bullet.frame = 1;
           var bullet = bullets.create(gun.x + 78, gun.y + 5, 'bullet');
           bullet.body.velocity.x = 300; 
           bullet.frame = 0;
           ammo-=2;
        } 
        if (character === player) {
          ammoCount = ammo;
        } else {
          for (var i = 0; i < enemies.length; i++){ 
            if (character = enemies[i]){
              enemies[i].ammo = ammo;
            }
          }
        }
    }
    bulletCounter++;
    if (bulletCounter > firingRate){
        bulletCounter = 0;
    }
};

var pistolMatch = function (character, gun, left, right) {
    if (firing === false) {
        if (right) {
            gun.frame = 0;      
        } else if (left) {
            gun.frame = 2;
        } else {
          gun.frame = 4;
        }
    }
    gun.x = character.x - 24;
    gun.y = character.y + 22;  
};

var checkBulletPickUp = function () {
   game.physics.overlap (player, bulletPickUps, addBullets, null, this);
};

var addBullets = function (player, bulletItem) {
  bulletItem.kill();
  ammoCount = 8;
};

var bounceBulletPickUps = function () {
  for (var i = 0; i < bulletItems.length; i++) {
      bulletItems[i].animations.play('bounce');
  }
};
