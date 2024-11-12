// incorrect code 
var findErrorNums = function(nums) {
    const hashmap = new Map();
    const output = [];
    let maxValue = 0;

    for (let i = 0; i <= nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) output.push(num);
        hashmap.set(num, i);
        maxValue = Math.max(maxValue, num);
    }

    for (let i = 1; i < maxValue + 1; i++) {
        if (hashmap.has(i)) {
            output.push(i);
            break;
        }
    } 

    return output;
};

//corrected version
var findErrorNums = function(nums) {
    const hashmap = new Map();
    let duplicate;
    let sum = 0;
    
    // Find the duplicate and calculate the sum of the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) {
            duplicate = num;  // Found the duplicate
        }
        hashmap.set(num, true);
        sum += num;
    }
    
    // Calculate the expected sum of numbers from 1 to n
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    
    // The missing number can be found by comparing the sums
    const missing = expectedSum - (sum - duplicate);
    
    return [duplicate, missing];
};
