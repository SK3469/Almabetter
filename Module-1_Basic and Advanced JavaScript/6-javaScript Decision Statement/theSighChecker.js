function checkSign(num1, num2, num3) {
    // Determine the signs of the numbers and concatenate them
    return (num1 > 0 ? "+" : (num1 < 0 ? "-" : "0")) + 
           (num2 > 0 ? "+" : (num2 < 0 ? "-" : "0")) + 
           (num3 > 0 ? "+" : (num3 < 0 ? "-" : "0"));
}

// Example usage:
console.log(checkSign(-1, 2, 3));    // Output: "++-"
console.log(checkSign(-1, -2, 3));   // Output: "+--"
console.log(checkSign(-1, -2, -3));  // Output: "---"
console.log(checkSign(2, 3, 5));     // Output: "+++"
