var arrAlph = ['z', 'k', 'g', 'a', 'r', 'p', 'o', 'w'];
var new1 = arrAlph.sort(function(item1,item2){
    var rez = item1 > item2;
    return rez ? 1 : -1;
    
});
console.log(new1);