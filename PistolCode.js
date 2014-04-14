var left = false;
var right = false;
var firing = false;
var fireCounter = 0;
var enemyHealthNum = 0;
var bulletCounter = 0;
var ammoCount = 8; 

var bulletItems = [];

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
       } else {
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
        } else if (character === enemy) {
          enemyAmmo = ammo;
        }
    }
    bulletCounter++;
    if (bulletCounter > 7){
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


