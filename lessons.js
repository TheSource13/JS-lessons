var a = 12;
var b = 24;

if(a > b ) console.log('False');
  else console.log('true');


if(true) console.log('There!!!');
if(a === b / 2) console.log("There");
if(a) console.log('There!!!!')
if(a <= b) console.log('true');

var i = 0 ;
while (i < 11){
    console.log( + i);
     i +=1;}


var x = 3;
var y = 4;
y = x++ ;
console.log('x = ', x, ',', 'y =',   y);


var k = 0;
while(k < 20)
{
  if (k % 3 === 0 || k % 7 === 0)

  console.log(k);
  
  k +=1;
}


console.log(1 + "1");

var x = 2*2 + 1;
console.log(x);

var userName ='John';
function sayMyName(){
    userName = 'Elvis';
    const massage ='Hello, my name is ' + userName;
    console.log(massage);


}

sayMyName();

function foo() {
  console.log('foo');
}

var i = 1;
var a = ++i;
console.log(a);

var i = 1 ;
var a = i++;
console.log(a);


var i = 0;
i++;
++i;
++i;
console.log( i );

// Функция принимает количество часов (проверить что это число). Функция возвращает количество секунд в переданых часах.


var n;
n = 12;
 if(typeof n !== 'number'){
  return;
 }
   else{
    console.log(n*3600);
  }


  // Функция принимает параметр min. Параметр должен являться числом. В нем лежит число от 0 до 59. Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).


  var minute;
minute = 58;
var min = minute;
if(min !=='number' && min < 0 && min > 59){
  return; 
}
else
   if(min <= 14){ console.log('fist quater');}
     else
   if(min >=15 && min<= 29 ){console.log('second quater');}
     else
   if(min >=30 && min<= 44 ){console.log('third quater');}
     else
   if(min >=45 && min<= 59 ){console.log('forth quater');}

  //  В функцию передаются переменные first и second. Проверьте, что first делится без остатка на second. Если это так - возвращаете  true, иначе возвращаете false.

  var first = 2;
  var second = 2;
  var third = first % second;
  if (third === 0){console.log('true');}
   else
     { console.log('false');}

    

    //  Функция принимает число n(проверить что n является числом в противном случае завершить работу функции). 
    // Функция возвращает строку чисел от 1 до n через разделитель ','. 
    // Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2').

 var n;
  n = 16;
 if(n !=='number'){
   return;
 }
  else
    if(n=>1){
    
    console.log(n);
    
    }



    // lesson 4

    //  function declaration

    myFirstFunction();
    myFirstFunction();
    myFirstFunction();
    myFirstFunction();
    myFirstFunction();

    function myFirstFunction(){

      console.log('Hello World');

    } 

    myFirstFunction();


    function myFirstFunction(name, place){
          
      console.log('Hello ' + place +' My name is ' + name);
    }

    myFirstFunction('Nick', 'World');


    function myFirstFunction(name, place){
          
      console.log('Hello ' + place +' My name is ' + name);
    }

    myFirstFunction();

    function myFirstFunction(name, place){
          
      console.log('Hello ' + place +' My name is ' + name);
    }

    myFirstFunction('Nick');


   var phrase = myFirstFunction('Nick' , 'World');
      console.log(phrase);

    function myFirstFunction(name, place){
          
    return('Hello ' + place +' My name is ' + name);
    }


    var phrase = myFirstFunction('Nick' , 'World');
      console.log(phrase);

    function myFirstFunction(name, place){
          
    ('Hello ' + place +' My name is ' + name);
    }




    var k = 'This is global function';
    var phrase = myFirstFunction('Nick' , 'World');
    console.log(phrase);
     console.log(k);

     function myFirstFunction(name, place){
         k = 'This is local function';
         
        console.log(k);
       return('Hello ' + place +' My name is ' + name);
  }


  // fn.expression
  var  functionExpressoin= function(name){
           return('Hello ' + name);

  }

  console.log(functionExpressoin('Nick'));
    

  
  var  functionExpressoin= function(name){
    return('Hello ' + name);

}
var rezult = functionExpressoin('Nick');

// function parameters


// рекрсия

function forFn(max){
  if(max < 0){
    return
  };
console.log(max);
forFn(max - 1);

}

forFn(10);


for(var i = 0 ;  i < 10 ;  i++);
console.log(i);

function forFn(max){
  if(max > 10){
    return
  };
  if(max < 0){
    return
  };
console.log(max);
forFn(max + 1);

}

forFn(1);
// 2 решение

function forFn(max, start = 0){
  if(start === max){
return
};
  console.log(start);
  forFn(max, start + 1);

}
forFn(10);

// факториал

function factorial(n){
  if (n < 0){
    return 'invalid Pararmetr';
  }
  var factorial = 1;

    for(var i = 1; i <= n ; i++){
      factorial = factorial * i;  
       }
       return factorial
    }
console.log(factorial(5));


function factorial(n){

  if (n < 0) {
    return 'invalid Pararmeter'
  }

   var factorial = 1;
    for(var i = 1; i<= n; i++) {
      factorial = factorial * i;
    }
    return factorial

}

console.log(factorial(5));



// Коля решает

function factorial(n){
  
  if (n === 0){
     return 1;
}
    return n * factorial(n-1);
  
   

}

console.log(factorial(5));


function factorial(n){
  if(n !== "number"){
    return "Bad data";
  }
   
  if (n === 0){
     return 1;
}
    return n * factorial(n-1);
  
   

} 

console.log(factorial(5));




function getNumLine(n)
{
    if (n == 0) return n;
    else 
    
       return getNumLine(n - 1) + "," + n;
}


console.log(getNumLine(5));

// Задание 1. Функция принимает число n(проверить что n является числом в противном случае завершить работу функции).
//  Функция возвращает строку чисел от 1 до n через разделитель ','. 
//  Если число меньше 1 то выдается строка (например n = -2 строка должна быть '1,0,-1,-2').

/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    if(typeof input !=='number'){
      return 'NaN';
    }
    
    else
      if(input >= 1){
     return stringBuilder(input - 1) + ',';}

     else 
       if(input < 1){ 
        return stringBuilder(input - 1) + ',' + input;}

   
};

stringBuilder("l")
module.exports = stringBuilder;


console.log(typeof object)

var i = 0;
while (i < 3) {
  console.log( i );
  i++;
}

function my_function(n) {
  if (n<=1) return n;
   else
  return my_function(n-1)+" "+n;
}
 var n = 6;
console.log(my_function(6)) ;

function getNumLine(n)
{
    if (n == 0) return n;
    else 
    
       return getNumLine(n - 1) + "," + n;
}


getNumLine(5);

function my_function(n) {
  if (n<1) return n;
   else
  return  my_function(n-1)+ " " + n;
}

console.log(my_function(5)) ;




function my_function(n) { 
   if (n>1)
  return  my_function(n-1)+ " " + n;
  else
  if (n<1) return my_function(n+1) + ' ' + n;
}

console.log(my_function(-5)) ;


function my_function(n) { 
   if (n>=1)
  return  my_function(n-1)+ " " + n;
  else
  if (n<1) return my_function(n+1) + ' ' + n;
}

console.log(my_function(-5)) ;

// общий знаменатель
const commonDevisor = ( num1, num2) => {

 if (num2 == 0){
   return num1;
 }
   return commonDevisor(num2, num1%num2);

   }

   console.log(commonDevisor(100, 45));
  
  // без рекурсии
   const gcd_2 = ( a, b) => {
    var t;
    while (b != 0) {
      t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  console.log(gcd_2(100,45));


  const commonDevisor = (num1, num2) => {
    if (!num2) {
        return num1;
    }
    return commonDevisor(num2, num1 % num2);
};

console.log(commonDevisor(100,45));
module.exports = commonDevisor;

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
     var = 56;
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




const arr = [1 .'apple', true, {}];
arr.push('new element');      

}



var str = "1,2,3,"
const arr1 = str.split(',');
const arr2 = arr1.map(function(item){
return + item;
});

console.log(arr2)
aar1.forEach(function(item, index){
console.log(Element ${item})
});
console.log(arr1);
console.log(typeof arr1[0]);