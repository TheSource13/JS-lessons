var multi = [
        [7,2,3],
        [1,2,3],
        [3,2,4]
    ];
        
    var sum = 0;
    
    for(var k = multi.length - 1; k >= 0 ; k--){
      sum = sum + multi[multi.length - 1 - k][k];
      console.log(multi[multi.length - 1 - k][k]);
    }
    
    console.log(sum);