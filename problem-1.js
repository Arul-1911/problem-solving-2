//function to generate the first n numbers in the Fibonacci sequence.

function fibonacci(n){
   let prev = 0;
   let current = 1;

   for(let i = 2; i <n;i++){
      current = prev + current;
      prev = current - prev
   }
   return current;
}

console.log(fibonacci(18))