var vodka = {
    name:'Finlandia',
    'this is the key': 0.7,
    0: 'I call the 0',
    drinkMe : function(){
       return 'I drink ' + this.name + ' vodka';
    },
    // drinkMe2(){
    //     return 'I drink ' + this.name +  this.kind + ' vodka';
    //  }
  
}
var drink = vodka.drinkMe;
// var drink = vodka.drinkMe.bind(vodka);
console.log(drink()); // потеря контекста фунции
console.log(drink.call(vodka)); // нахождение контекста

vodka.name = 'Stoli';
vodka['kind'] = ' Strong';
vodka.kind = ' Strong';
console.log(vodka['kind']);
// console.log(vodka.kind);
// console.log(vodka['name']);
// console.log(vodka['this is the key']);
// console.log(vodka['0']);
// console.log(vodka.name);
console.log(vodka.drinkMe());
console.log(vodka.drinkMe2());

// двумерный arr

var arr1 = [1,2,3,4,5,6,7,8,9,0];
var arr2  = [1,2,3,4,5,6,7,8,9,0];
var arr3 = [1,2,3,4,5,6,7,8,9,0];
var multi = [
    arr1, 
    arr2,
    arr3,
]

console.log(multi[0][0]);