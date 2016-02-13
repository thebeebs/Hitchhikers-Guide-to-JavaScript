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
//var createTerrain = require('voxel-perlin-terrain');

var game = createEngine({
  texturePath: 'textures/', generate: function(x, y, z) {
    return y === 1 ? 1 : 0
  }

});

var container = document.getElementById('container');
game.appendTo(container);

var createPlayer = require('voxel-player')(game);
var beeby = createPlayer('beeby.png');
beeby.yaw.position.set(0, 100, 0);
beeby.possess();

for (var index = 0; index < 20; index++) {
    var pos = [1, 1 + index, 1 ]
    game.setBlock(pos, 3)    
}

for (var index = 0; index < 10; index++) {
    var pos = [1, 1 + index, 5 ]
    game.setBlock(pos, 3)    
}


