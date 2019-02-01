var obj = {
    name: 'Basil',
    val:'This is my value',
    'This is very complex field name': 123,
    sayHello: function(){
        console.log('Hello ' + this.name + ' ' + 123);
    }
};

console.log(obj['This is very complex field name']);
obj.sayHello();




var arr = {

    '0':12,
    '1':14,
    '2':345,
    true: 34,
}

console.log(arr[1]);
console.log(true);



var obj = {
    name: 'Basil',
    val: 42,
    'This is very complex field name': 123,
    sayHello: function(){
        console.log('Hello ' + this.name + ' ' + 123);
    },
    addition: function() {
      return this.val + this['This is very complex field name'];
    }
};

console.log(obj['This is very complex field name']);
obj.sayHello();
var b = obj.addition();
console.log(b);


for(var k in obj){
     console.log(k);
}

var arr = [1,2,3,4,5,6,7,8,9,0,210];
arr[100] = 100500;

for(var i = 0; i < arr.length; i++){
   console.log(arr[i]);
}


var arr = [1,2,3,4,5,6,7,8,9,0,10];
arr[100] = 100500;

for(var k in arr){
   console.log(arr[k]);
}

var arr = [1,2,3,4,5,6,7,8,9,0,10];
arr[100] = 100500;

for(var k of arr){
   console.log(arr[k]);
}


var a = {

    b : 1,
}

var fn = function(param){
        param = {};
        param.b = 1234;
}

fn(a);
console.log(a.b);


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


function fn(){
    return [].join.call(arguments, '');

};

console.log(fn('hello','buy', 'call', 'please', 'plesure'));