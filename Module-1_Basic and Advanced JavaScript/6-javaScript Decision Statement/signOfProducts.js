// function product(a, b, c) {
//     const num = a * b * c;

//     switch (true) { // Use true for range or logical conditions
//         case num > 0:
//             console.log("1");
//             break;
//         case num === 0:
//             console.log("0");
//             break;
//         case num < 0:
//             console.log("-1");
//             break;
//         default:
//             console.log("invalid input");
//             break;
//     }

//     return num;
// }

//if- else statemnt...
// function productSign(num1, num2, num3) {
//     const product = num1 * num2 * num3;
//     if (product > 0) {
//       return 1;
//     } else if (product < 0) {
//       return -1;
//     } else {
//       return 0;
//     }
//   }


// short method using Math.sign()

function productSign(num1, num2, num3) {
    return Math.sign(num1 * num2 * num3);
}

console.log(productSign(2, 3, 5)); // Output: 1


/* 
WHY should not use switch statment.....
For this problem: The if-else implementation is more straightforward, readable, and better suited because it deals with a simple numeric comparison.
Switch is better when**:
You have multiple distinct cases to handle (e.g., checking specific string or numeric values).
You prefer the clarity of handling discrete cases in separate blocks.
Example Outputs for Both:
For inputs num1 = 2, num2 = -3, num3 = 5:

The product is -30 (negative).
Both implementations will output:
Switch: Logs -1 and returns -30.
If-Else: Directly returns -1.
For inputs num1 = 0, num2 = 5, num3 = -3:

The product is 0.
Both implementations will output:
Switch: Logs 0 and returns 0.
If-Else: Returns 0.*/
