class VoxelView{  
    constructor(){
        this.points = [];              
    }
    
     addGraphpoint(value){
         
         this.points.push(value);
         var lengthOfGraph = this.points.length;
         for (var index = 0; index < value; index++) {
            var pos = [1, index + 1, lengthOfGraph ]
            window.game.setBlock(pos, 3)    
         } 
         console.log('Add' + (lengthOfGraph - 1));
         return lengthOfGraph - 1;       
     }
     
     updateGraphpoint(i, oldValue, newValue){
         console.log('Update' + i);
        for (var index = 0; index < 50; index++) {
            var pos = [1, index + 1, i]
            window.game.setBlock(pos, 0)    
         }
         for (var index = 0; index < newValue; index++) {
            let pos = [1, index + 1, i]
            window.game.setBlock(pos, 3)    
         }
         this.points[i] = newValue;                
     }
     
     removeGraphpoint(i){
         console.log('Remove' + i);
        for (var index = 0; index < 50; index++) {
            var pos = [1, index + 1, i + 2 ]
            window.game.setBlock(pos, 0)    
         }
         console.log(this.points)
         console.log('Shift' + i); 
         this.points.shift()  
         console.log(this.points)               
     }
        
}


class voxelWorld extends HTMLElement{
    attachedCallback(){
        this.voxelView = new VoxelView({ container: this})        
    }    
}

class voxelGraphpoint extends HTMLElement{
        attachedCallback(){
            // This is null when first Created dynamically
            var val = this.getAttribute('value');
            this.voxelView = this.parentNode.voxelView;
            this.graphpoint = this.voxelView.addGraphpoint(val)
        }
        attributeChangedCallback(attributeName, oldValue, newValue){
            if (attributeName = "value"){
                  this.voxelView.updateGraphpoint(this.graphpoint, oldValue, newValue)
            }
        }
        detachedCallback(){
            this.voxelView.removeGraphpoint(this.graphpoint);
        }
    
}

document.registerElement('voxel-world', voxelWorld);
document.registerElement('voxel-graphpoint', voxelGraphpoint);

