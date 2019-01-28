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


 





 



a = 4;
var b = function() {
      a = 42;
   // console.log('local b= ' + a);
    return function (){
       var a = 145;
       // console.log('local c = ' + a);
    }
}

var c = b();
c();
console.log('globe a = ' + a);