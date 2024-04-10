// function to check if two strings are anagrams of each other

function anagram(str1,str2){
   if(str1.length !== str2.length) return false

   let charCount = {};

   for(let i=0; i< str1.length;i++){
      let char1 = str1[i]
      charCount[char1] = (charCount[char1] || 0) + 1;

      let char2 = str2[i]
      charCount[char2] = (charCount[char2] || 0) -1;
   }

   for (let char in charCount){
      if(charCount[char] !== 0){
         return false
      }
      return true
   }
}

console.log(anagram('cat','act'))
console.log(anagram('catw','acwt'))
console.log(anagram('cat','cat'))