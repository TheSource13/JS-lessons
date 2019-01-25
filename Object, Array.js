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
console.log(drink()); // потеря контекста фунции


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