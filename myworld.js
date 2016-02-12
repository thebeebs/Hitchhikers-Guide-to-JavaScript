/* var createGame = require('voxel-hello-world')
var createTree = require('voxel-forest')
window.onload = function() {
 
};

var game = createGame()
window.jeff = function(){    
     for (var i = 0; i < 25; i++) {
            createTree(game, {bark: 2, leaves: 3});
    }
};
*/
// create the game

var createEngine = require('voxel-engine');
var createTerrain = require('voxel-perlin-terrain');

var game = createEngine({
  texturePath: './textures/',
  generate: function(x,y,z) {
    return x*x+y*y+z*z <= 15*15 ? 1 : 0 // sphere world
  },
  materials: [['grass', 'dirt', 'grass_dirt'], 'brick', 'dirt'],
  materialFlatColor: false,
  chunkSize: 32,
  chunkDistance: 2,
  worldOrigin: [0, 0, 0],
  controls: { discreteFire: false },
  lightsDisabled: false,
  fogDisabled: false,
  generateChunks: true,
  playerHeight: 1.62
});

var container = document.getElementById('container');
game.appendTo(container);

var createPlayer = require('voxel-player')(game);
var shama = createPlayer('shama.png');
shama.yaw.position.set(0, 0, 0);
shama.possess();

