function isPalindrome(str){
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reveredStr= cleanedStr.split('').reverse().join('');
 return cleanedStr === reveredStr ;
}
console.log(isPalindrome("PAPA"))