var vowels = /[aeiou]/g;
var str = 'maaaooouuiiidaiioooeeeeuuum';
function isPal(str) {
    if (typeof str !== 'string') {
        return;
    } else {
        str = str.replace(vowels, '');
        console.log(str);
        return str === str.split('').reverse().join('');
    }
}


var array = str.split(/\d*/);
console.log(array);