var Tree = function(kind){
    // var roots = function(){
    //     console.log('roots is growing');      
        
    // }
    this.branches = 100;
    this.kind = kind;    /здесь мы определили,какое будет дерево, его чертеж/
    
    // this.growing = function(){
    //     roots();
    //     this.branches += 1; 
    //     console.log('This ' + this.kind +' tree is growing');
    // }
}

Tree.prototype.growing = function(){
    // roots();
    this.branches += 1; 
    console.log('This ' + this.kind +' tree is growing');
}

var Oak = function(size){
    Tree.call(this,'Oak')
    this.size = size;
};

Oak.prototype = Object.create(Tree.prototype);
Oak.prototype.growing = function(){
    this.branches += 3; 
    console.log('This ' + this.kind +' tree is growing');
    Tree.prototype.growing.call(this);
}
Oak.prototype.growZholudi = function(){
    console.log('This' + this.size + '' + this.kind + ' growing zholudi ');
};

var tree = new Oak('XXL')

// var tree =  new Tree('Apple');
// tree.growing = function(){
//     console.log('This tree growing in other way')
// }; не совсем правильно
console.log(tree);
tree.growZholudi();
tree.growing();
tree.growing();
tree.growing();
tree.growing();
tree.growing();
console.log(tree.branches);

// var tree2 = new Tree('Apple');
// console.log(tree === tree2);


var Boat = function(kind){
    this.paddle = 20;
    this.crew = 10;
    this.kind = kind;
    
};
Boat.prototype.growing = function(){
    this.paddle += 2;
    this.crew += 1;
    console.log('This ' + this.kind + ' is growing');
    // console.log(this.kind + 'paddle ' + boat.paddle);
    // console.log(this.kind + 'crew ' + boat.crew);
};

var Ship = function(engine){
    Boat.call(this,'Ship')
    this.engine = engine;
}
Ship.prototype = Object.create(Boat.prototype);
Ship.prototype.swiming = function(){
    console.log('This ' + this.kind + ' with engine ' + this.engine + ' swiming very quickly')
} 


var boat = new Ship('Bentley');
console.log(boat);
boat.swiming();
boat.growing();
boat.growing();
boat.growing();
boat.growing();
boat.growing();
boat.growing();
console.log(boat.kind + ' paddle ' + boat.paddle);
console.log(boat.kind + ' crew ' + boat.crew);

