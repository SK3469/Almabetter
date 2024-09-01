/* code with bug

var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') open++;
        else if(open) close++;
        else open--;
    }
    return open + close;
};
*/

//Fixed code
// Function to calculate the minimum number of parentheses to add to make the string valid
var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for (let c of s) {
        if (c === '(') {
            open++; // Increment open for an open bracket
        } else if (open > 0) {
            open--; // Decrement open if there's a matching open bracket
        } else {
            close++; // Increment close for an unmatched close bracket
        }
    }
    
    return open + close; // Return the sum of unmatched open and close brackets
};

// Example usage
let A1 = "(()";
let A2 = "())";
let A3 = "()))((";

console.log(minAddToMakeValid(A1)); // Output: 1
console.log(minAddToMakeValid(A2)); // Output: 1
console.log(minAddToMakeValid(A3)); // Output: 4
