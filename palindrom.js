function isPal(string) {
    var newstr;
    var newstrarr;
    var palidr

    if (typeof string !== "number") {
        newstr = string.toLowerCase();
    } else {
        newstr = string.toString();
    }

    newstr = newstr.replace(/\s/g, '');
    palidr = newstr.split('').reverse().join('');
    console.log(palidr);

    if (+palidr !== NaN) {
        +palidr;
    }

    if (palidr === newstr) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal(12321)); //true
console.log(isPal('123212')); //false




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


var array = str.split(/\w*/);
console.log(array);


console.log(isPal(str));


// функция принимает массив слов и возвращает только палиндром

var arr = [
    'jjflsdfj',
    'madam',
    'volov',
    'eporiw'];
function isPal(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].split('').reverse().join('')) {
            console.log(arr[i]);

        }
    }
}

isPal(arr);