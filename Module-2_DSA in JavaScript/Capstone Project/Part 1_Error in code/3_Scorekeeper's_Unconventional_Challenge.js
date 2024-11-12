/*code with error
var callPoints = function(operations) {
    for (let i = 0; i <= operations.length; i++) {
        if (operations[i] === "+") {
            sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        } else if (operations[i] === "D") {
            newD = operations[i - 1] * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
        } else {
            var integer = +operations[i];
            operations[i] = integer;
        }
    }

    // to calculate the totalSum only
    let totalSum = 0;
    for (let i = 0; i <= operations.length; i++) {
        totalSum += operations[i];
    }

    return totalSum;
};
*/

//fixed code
var callPoints = function(operations) {
    let record = [];
    
    for (let i = 0; i < operations.length; i++) {
        let op = operations[i];
        
        if (op === "+") {
            // add the sum of the last two scores to the record..
            let last = record[record.length - 1];
            let secondLast = record[record.length - 2];
            record.push(last + secondLast);
            console.log(`Operation "+": Adding ${last} + ${secondLast} = ${last + secondLast} to the record.`);
        } else if (op === "D") {
            // double the last score and add to the record..
            let last = record[record.length - 1];
            record.push(last * 2);
            console.log(`Operation "D": Doubling ${last} = ${last * 2} and adding to the record.`);
        } else if (op === "C") {
            // Invalidate the last score
            let removed = record.pop();
            console.log(`Operation "C": Removing ${removed} from the record.`);
        } else {
            // convert the string to an integer and add to the record..
            let score = parseInt(op);
            record.push(score);
            console.log(`Operation "${score}": Adding ${score} to the record.`);
        }
        
        console.log(`Current record: ${record}`);
    }
    
    // Calculate the total sum of the record..
    let totalSum = record.reduce((sum, score) => sum + score, 0);
    console.log(`Total sum of the record: ${totalSum}`);
    
    return totalSum;
};


let ops1 = ["5","2","C","D","+"];
let ops2 = ["5","-2","4","C","D","9","+","+"];
let ops3 = ["1","C"];


console.log(`Final result: ${callPoints(ops1)}`); // Output: 30

console.log(`Final result: ${callPoints(ops2)}`); // Output: 27

console.log(`Final result: ${callPoints(ops3)}`); // Output: 0
