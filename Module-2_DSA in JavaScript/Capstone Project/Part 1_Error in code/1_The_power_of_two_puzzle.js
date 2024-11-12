//Bug fixing problem

//code with bug..

// function isPowerOfTwo(n) {
    
//     return n > 0 || (n & (n - 1)) === 0;
// }

//code bug fixed..
function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === 0;
}

console.log (isPowerOfTwo(16)) 
//True n=16 then binary is 
//16/2= 8,reminder 0
//8/2 =4, reminder 0
//4/2 =2 , reminder 0
//2/2=1, reminder 0
//1/2=0, reninder 1
// binary is 10000
//&&
//15/2= 7,reminder 1
//7/2 =3, reminder 1
//3/2 =1 , reminder 1
//1/2=0, reminder 1
// then binary is 01111 whereas 0 filled the fix format of bunary bit
 
console.log (isPowerOfTwo(5)) //False bianry is 1 0 1
console.log (isPowerOfTwo(64)) //True bianry is 1000000

// Time Complexity: O(1) because the bitwise operations and comparison are performed in constant time.
// Space Complexity: O(1) because no extra space is used apart from the input value.