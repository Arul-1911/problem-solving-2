//function that finds the maximum and minimum elements in an array

function minandmax(arr){

   if(arr.length === 0){
      return false
   }
   let min = arr[0]
   let max = arr[0]

   for(let i=0; i < arr.length;i++){
      if(arr[i] < min){
        min = arr[i]
      } else if(arr[i] > max ){
         max = arr[i]
      }
   }
    return { min: min, max: max };
}


console.log(minandmax([10,5,1,2,3,4]))