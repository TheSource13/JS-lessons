

var k = 'This is global function';
var phrase = myFirstFunction('Nick', 'World');
  console.log(phrase);
  console.log(k);

function myFirstFunction(name,place){
    // console.log('Hello ' + place + ' My name is ' + name);
     k = 'This is local function';
    console.log(k);
    return 'Hello ' + place + ' My name is ' + name
}




var functionExpression = function(name){
    return 'Hello ' + name;
} 
console.log(functionExpression('Nick'));


var functionExpression = function(name){
    return 'Hello ' + name;
}
var result = functionExpression('Nick');
console.log(result);


function forFn(max){
    if (max < 0)
     { return}
    console.log(max);
    forFn(max - 1);
}

forFn(5);


function forFn(i, start = 0){
    if(start === i){
        return
    }
  console.log(start);
  forFn(i , start + 1);
}

forFn(6);




function factorial(n){
    if (n < 0){
        return 'invalid parameter';
    }
var factorial = 1;

for (var i = 1; i <=n; i++){
     factorial = factorial * i;
}

return factorial;
}

console.log(factorial(5));


function factorial(n){
    if (n < 0){
        return 'invalid parameter';
    }
var factorial = 1;

for (var i = n; i > 0; i--){
     factorial = factorial * i;
}

return factorial;
}

console.log(factorial(5));


// факториал через рекурсию

function factorial(n){
  if (n === 0){
      return 1};
     
   return n * factorial(n-1);
}
  console.log(factorial(5));


  function factorial(n){
    for( i = 0; i<=n; i++)
    // if (n === 0)
    //     return 1;    
     return  n * factorial(i+1);   
     
  }
    console.log(factorial(5));