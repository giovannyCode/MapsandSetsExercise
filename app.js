/* Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4]) */   {1, 2, 3, 4}


/* Quick Question #2
What does the following code return?

[...new Set("referee")].join("")   the string  ref */ 

/* 
Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); key[1,2,3] value : true  key[1,2,3] value : false */


/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false */

const hasDuplicate = (arr) =>{  const reduced = new Set(arr)
if (arr.length === reduced.size)
{
  return false
}
else 
{
  return true;
}
}
/* 
vowelCount
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 } */


const vowelCount = (value) => 
{
   const mapResult = new Map();

   for (const letter of value) {
    
    const vowels  = "aeiou";
    if(vowels.indexOf(letter) >= 0)
    {
      if(mapResult.has(letter))
      {
        const letterValue = mapResult.get(letter);
        const letterCount= letterValue + 1;
        mapResult.set(letter,letterCount);
      }
    else
      {
        mapResult.set(letter,1);
      }
    }
   }
   return mapResult;
}