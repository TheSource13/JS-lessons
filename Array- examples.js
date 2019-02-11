// вывести массив, в котором другие масиивы,на печать каждый элемент массива
var arr1 = [1,2,3,4,5,6,7,8,9,0];
var arr2 = [1,2,3,4,5,6,7,8,9,0,12];
var arr3 = [1,2,3,4,5,6,7,8,9,0,13,14];
var multi = [
     arr1,
     arr2,
     arr3
    ];


for(var k in multi){
    for (var i in multi[k]){
        console.log(multi[k][i]);            
    }
   
}

// Саня решил 
var arr = [[1, 2, 3,  4], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }

}

   //сумма всех чисел в многомерном массиве
   var arr1 = [1,2,3,4,5,6,7,8,9,0];
   var arr2 = [1,2,3,4,5,6,7,8,9,0,12];
   var arr3 = [1,2,3,4,5,6,7,8,9,0,13,14];
   var multi = [
        arr1,
        arr2,
        arr3
       ];
   
   var sum = 0;
   for(var k in multi){
       for (var i in multi[k]){
           sum =sum + multi[k][i];    
               
       }
       
   }
   
   console.log(sum); 


    //сумма квадратов элементов многомерного массива
    var arr1 = [1,2,3,4,5,6,7,8,9,0];
    var arr2 = [1,2,3,4,5,6,7,8,9,0,12];
    var arr3 = [1,2,3,4,5,6,7,8,9,0,13,14];
    var multi = [
         arr1,
         arr2,
         arr3
        ];
    
    var sum = 0;
    for(var k in multi){
        for (var i in multi[k]){
            sum =sum + multi[k][i]*multi[k][i];    
                
        }
        
    }
    
    console.log(sum); 


    // сумма элементов массива
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var sum = 0;
    for(var i in arr){
        sum +=arr[i];
    }

    console.log(sum); 

    //сумма  элементов многомерного массива по диагонали
    var arr1 = [1,2,3,4,5,6,7,8,9,0];
    var arr2 = [1,2,3,4,5,6,7,8,9,0,12];
    var arr3 = [1,2,3,4,5,6,7,8,9,0,13,14];
    var multi = [
         arr1,
         arr2,
         arr3
        ];
    
    var sum = 0;
    for(var k in multi){
        for (var i in multi[k]){
            if( k === i)
            sum =sum + multi[k][i]; 
           
                
        }
        
    }
    
    console.log(sum); 


    // вывести максимальное значение в массиве

    var arr = [38,56,7,12,11,90,77,42,23,13,56,17];
   function max(arr){
       var vmax = arr[0];
       for (var i = 1; i < arr.length; i++){
           if(vmax < arr[i]){
               vmax = arr[i];
           }
           
       }
       return vmax ;
   }
   
   console.log(max(arr));



 //   сортировка элементов в массиве 

 var arr = [38,56,7,12,11,90,77,42,23,13,56,17];
 function max(arr){
     var index = 0;
     var vmax = arr[index];

     for (var i = 1; i < arr.length; i++){
         if(vmax < arr[i]){
             vmax = arr[i];
             index = i;
         }
         
     }
     return {vmax: vmax , index : index};
 }
 
 function sort(arr){
    var temp;
     for(var i = 0; i < arr.length; i++){
         for(var j = i; j < arr.length; j++){
             if(arr[i] < arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            
        }
    }
}
sort(arr);
console.log(arr);

// сортировка методом бульбашка

var arr = [ 38 , 56, 7, 12, 11, 90, 77, 42, 23, 13, 56, 17];
function sort(arr){
    var temp;
      for(var i = 0; i < arr.length; i++){
          var count = 0;
          for(var j = i - 1; j < arr.length; j++){
              if(arr[j] < arr[j-1]){
                  temp = arr[j];
                  arr[j] = arr[j - 1];
                  arr[j-1] = temp;
                  count +=1;
              }
          }
          if(count == 0){
              break;
          }
      }
      return arr;
}

sort(arr);
console.log(arr);



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






