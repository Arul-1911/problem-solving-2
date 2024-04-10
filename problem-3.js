//function that checks if a given string is a palindrome

function palind(str){
   for(let i=str.length; i >= 0;i--){
      if(str[i] !== str[str.length-1-i]){
         return false
      }
   }
   return true
}

console.log(palind('madam'))