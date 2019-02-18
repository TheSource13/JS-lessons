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