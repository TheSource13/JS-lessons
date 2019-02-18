var a = 1;
var b = 2;
var c = 3;
console.log(a + b + c);


var a , b , c , d , c , fn ;
a = 1 ;
b = "sttr" ;
c = true ;
d = undefined ;
f = {};
fn = function () {} ;
console.log(typeof a) ;
console.log(typeof b) ;
console.log(typeof c) ;
console.log(typeof d) ;
console.log(typeof f) ;
console.log(typeof fn) ;

console.log(typeof typeof z);

console.log(1 + 1);
console.log("1" + "1");
console.log(1 + '1');
console.log(undefined + undefined);
console.log('1' - 2) ;
console.log('58'- 1 );
console.log(5*'6');

var k = + '123';
console.log(k);

var s = !! '123';
console.log(s);


var k = !! NaN;
console.log(k);

console.log(1 == '1');
console.log(true == '1');

//next lesson 3

console.log()
var a = 12
var b = 24
if(true) console.log('there!!!') 
if(a === b /2) console.log('there')
if(a) console.log('there!!!')


c = true
var a = true;
if(c === true)console.log("madness");

if(a < b) {

    console.log('Hello');
}  else { Console.LOG('BYE')}



c ? console.log('true') : console.log('false');

var z =  a > b ? 100500 : 10 ;

b = 120
switch(b) {  

    case  100500 :
     console.log('To much');
     break;
     case  10 :
       console.log(' Normal');

       default : 
          console.log(' i have no idea about  count');
}




var  i = 0;
while (i < 11){

    console.log('i ia ' + i) ;
i  += 1;
}

var level  = 10;
count = 1;
var sum = 0;
do {
 sum += count;
 count += 1; 
}  while ( count <= level);
 console.log(sum);




var  border = 20;
for ( var k = 0; k <= border; k += 2){
    console.log(k);
}



var l = 0;
while (l < 20){
  console.log( + l);
  l += 2; 
}

var border = 20;
for ( var k = 0; k <= border; k += 1)
 if (k % 2 === 0 || k % 5 === 0){

    console.log("number is",  +k);

 }
  else {
       continue;
  }


  var border = 20;
for ( var k = 0; k <= border; k += 1)
 if (k % 2 === 0 || k % 6 === 0){

    console.log("number is",  +k);

 }
  else {
       continue;
  }


//   lesson 4



function (){}

function myFirstFunction(name, place){

    console.log('Hello World')
}

myFirstfFunction();

myFirstfFunction();
myFirstfFunction();
myFirstfFunction();
myFirstfFunction();

function myFirstFunction(name, place){

    console.log('Hello World' + place + name);

}

 var phrase=function myFirstFunction(name, place){

  return 'Hello World' + place + name;

}
\


function myFirstFunction(name, place){

    return 'Hello World' + place + name;
   после ретурн ничего не воспринимается- дед кодж\;

  }



  function

var functionExpression = fu

function forFn(max){
   if (max < 0) {

    return
   }
    console.log(max);
    forFn(max - 1);

}
forFn(10);

function factorial(n) {
   if (n  === 0)
   return 1;

   return  n * factorial (n -1)}

   console.log(factorial(5));
    

   рекурсия всех числел до заданного

   
 var = n;

     if 

     общий делитеть через рекурсию.

     подготовить вопросы на пятницую.Console


    //  урок 5 12.12.18

    строки и регексп

    // string

    let str = "Nick";


    console.log('ma name is ' + str)


    let str1 = "Nick";
    let str2 = "Nick";
    let str3 = "Nick";
    let str4 =   "Nick";
    let str5 = "Nick";

    console.log('Our names is${str1} ${str2} ${str3} ${str4} ${str5}' )



    let str1 = "Nick";
    let str2 = "Nick";
    let str3 = "Nick";
    let str4 =   "Nick";
    let str5 = "Nick";
    let arrStr = "12.23? 34? 5.6.7.8.9.y, -= "
    console.log('Hello.\n i\'m Nick')


    console.log(str1. toUpperCase());
  
    console.log(str1. toLocaleLowerCase());

    console.LOG(arrStr.slice(4.6))

    
    console.log(arrStr.indexOf('23'));

    console.log(arrStr.endsWith('y')

    let pattern 

    let regex = /abc/g;
    console.log('abcdef'. match(regex));


    let rudeWorld = 'fuck';
    let rudeWorld = new RegExp('fuck', 'gi';)
    let chat = 'fuck you fucking fuck'
    console.log(chat.toLowerCase().replace(redeworld, 'honey'))



'gi' - игннор toLowerCase.toLowerCase


let report = ' i pay 12 dollars for to  candies'
let digit = /\d/g;
console.log(report.replace(digit, '*'))


let report = ' i pay 12 dollars for to  candies'
let digit = /\d + dollars/g;
console.log(report.replace(digit, '* dollars'));



let report = 'i    give   you   a monney'
let digit = /\s+ /g;
console.log(report.replace(digit," "));



let naming = /^my name is{\w}+.$/gi;
let greet = ' my name is Nick.';
console.log(greet.match(naming))


var a = 100;

function fn(a)
// var a = 10 ;
 console.log(typeof a);

//  должно быть number




//    14.12.18
   var v= 10;
   function myfn(){
    var a = 12;

     var kk =  function(){
         var s= 56;
         kk()
     }
   }

   
myfn();



var fn = function(){
    var k = 0;
    return function(){

        return cuonter +=1;
    }
}
   
const closure = fn();
console.log




const arr = [1 ,'apple', true, {}];
arr.push('new element');      

}



var str = "1,2,3,"
const arr1 = str.split(',');
const arr2 = arr1.map(function(item){
    return + item;
});

console.log(arr2)
aar1.forEach(function(item, index){
    console.log(Element${item})
});
console.log(arr1);
console.log(typeof arr1[0]);


var i = 1;
var a = i++;
console.log(a);



09.01.19

// object theme
// аасоциативный массив


var vodka = {
    name:'Stoli',
    'this is the key': 0.7,
    drinkMe : function(){
        return ' i drink stoli';
    }
}


console.log(vodka.drinkMe());
console.log(vodka['name']);
console.log(vodka['name']);
console.log(vodka['this is the key']);

var obj = {
    a : 1,
    b : 2,
    c : 3,
    ll :4,
    fn : function (){
        
    }
}

obj.k = 456;
Object.defineProperty(obj, 'newProp',{
    value: 'this is new property',
    enumerable: true,
    writable: true,
    configurable: true
});
for (var key in obj){
    console.log(key);

}











var fu1= function( ){
for(var val in arguments ){
    console.log(val);
}



fn1('apple','banana', '1,2,3');


var tree = function(kind){
this.branches = 100;
this.kind = kind;
 
this.growing = function () {
    this.branches+=1;

}
}

var tree = new Tree('apple');
console.log(tree);

var boat = function (crew){
    this.paddle = 10;
    this.crew = crew;
}

boat.prototype.growing = function(){
    this.paddle += 1;
    console.log(this.crew);
}

var Yaht = function(size){
boat.call(this, 'Yaht');
  this.size = size;

}

Yaht.prototype = Object.create(boat.prototype);
Yaht.prototype.Engine = function(){
   console.log(this.crew + this.size)

}

var boat = new Yaht('mmmm');

console.log(boat);
boat.growing();
Yaht.Engine();

// Бульбашка методом Коляна

var arr = [45, 56, 6, -8, 345, 88, 11, 5 , 89, 0, -100 ];
   
var sort = function(arr){
   var isSorted = false;
   while(!isSorted){
       isSorted = true;
       for (var i = 0; i < arr.length - 1; i++ ) {
           if(arr[i]> arr[i + 1]){
               isSorted = false;
               var temp = arr[i + 1];
               arr[i + 1] = arr[i];
               arr[i] = temp;
           }
       }
   }

}
sort(arr);
console.log(arr);



// выдача всех значений переданных в arr(forEach) 

var arr = [45, 56, 6, -8, 345, 88, 11, 5 , 89, 0, -100 ];

var cb = function(item){
     console.log(item);
}

arr.forEach(cb);


// Map метод
var arr = [45, 56, 6, -8, 345, 88, 11, 5 , 89, 0, -100 ];
var newArr = arr.map(function(item){
    return item * 2;
})

console.log(newArr);

// toString

var arr = [45, '56','fuck', 6, -8, 345, 88, 11, 5 , 89, 0, -100 ];
var newArr = arr.map(function(item){
    return item.toString();
})

console.log(newArr);


// Filter

var arr = [45, '56','fuck', 6, -8, 345, 88, 11, 5 , 89, 0, -100 ];
var newArr2 = arr.filter(function(item){
    return typeof item === 'number';
})
console.log(newArr2);


// возвращает все числовые значения, даже строки
var arr = [45, '56','fuck', 6, -8, 345, 88, 11, 5 , 89, 0, -100 ];
var newArr2 = arr.filter(function(item){
    return !isNaN(+item);
    
})
console.log(newArr2);


var arr = [45, '56','fuck', 6, -8, 345.45, 88, 11, 5 , 89, 0, -100 ];
var newArr2 = arr
.filter(function(item){
    return !isNaN(+item);
    
})
.map(function(item){
    return +item;

})
.filter(function(item){
    return Number.isInteger(item);
})
.filter(function(item){
    return !(item%2);
})
.filter(function(item){
    return item>0;
})
console.log(newArr2);




// Сумма элементов массива
var arr = [45, '56','fuck', 6, -8, 345.45, 88, 11, 5 , 89, 0, -100 ];
var sum = 0;
var newArr3 = arr
.filter(function(item){
   return !isNaN(+item)
})
.map(function(item){
    return +item;
})
.forEach(function(item){
    sum += +item;
})
console.log(sum);



// метод reduce
var arr = [45, '56','fuck', 6, -8, 345.45, 88, 11, 5 , 89, 0, -100 ];
var newArr3 = arr.reduce(function(acc, item){
      acc += !isNaN(+item) ? +item : 0 ;
       return acc;
}, 0);

console.log(newArr3);



var arr = [45, '56','fuck', 6, -8, 345.45, 88, 11, 5 , 89, 0, -100 ];
var newArr3 = arr.reduce(function(acc, item){
      if(!isNaN(+item) && Number.isInteger(+item) && !(+item%2)){
          acc.push (+item);
      }


      return acc;
}, []);

console.log(newArr3);




// Sort метод

var arr2 = [45, 56, 6, -8, 345.45, 88, 11, 5 , 89, 0, -100 ];
var arr3 = arr2.sort(function(item1, item2){
     
    return item2 - item1;
});

console.log(arr3);


var arrAlph = ['z', 'k', 'g', 'a', 'r', 'p', 'o', 'w'];
var new1 = arrAlph.sort(function(item1,item2){
    var rez = item1 > item2;
    return rez ? 1 : -1;
    
});
console.log(new1);





