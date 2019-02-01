var superFn = function (sum1,sum2, fn){
    return fn(sum1,sum2);
 }
 
 var cb2 = function(a,b){
     return a - b;
 }

 var cb = function(a,b){
     return a + b;
 }
//   console.log(superFn(100,100 ,cb2));
 console.log(superFn(100,100, cb));


 

 


'use strict'
var a = 4;
var b = function() {
      a = 42;
   // console.log('local b= ' + a);
    return function (a){
          kk = 44;
      a = 145;
       // console.log('local c = ' + a);
    }
}
fn()
var c = b();
c();
console.log('globe a = ' + a);


// пример замыкания от Лехи

var b = function() {
   var a = 42;
      return function (){
       a = a + 1;
    
  }
}

var c = b();
c();
console.log(a);


'use strict'
var a = 1;
var b = function() {
      a = 2;
   // console.log('local b= ' + a);
    return function (){
           a = 3;
       return function(){
               a = 4;
       } 
    }
}
var c = b();
console.log('after c = ' + a);
var d =c();
console.log('after d = ' + a)
d();
console.log('globe a = ' + a);





