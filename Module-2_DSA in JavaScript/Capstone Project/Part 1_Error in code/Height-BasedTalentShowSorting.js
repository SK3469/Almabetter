//incorrect code 


//corrected code

var sortPeople = function(names, heights) {
    let length = heights.length; // Corrected: No parentheses for length
    let map = new Map();
    
    // Changed loop condition to avoid out-of-bounds error
    for(let i = 0; i < length; i++) {
        map.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);
    
    let res = [];
    for(let height of heights) {
        res.push(map.get(height));
    }

    return res;
};

const names1 = ["Mary", "John", "Emma"];
const heights1 = [180, 165, 170];
console.log("Output:", sortPeople(names1, heights1)); // Output: ["Mary", "Emma", "John"]


const names2 = ["Alice", "Bob", "Bob"];
const heights2 = [155, 185, 150];
console.log("Output:", sortPeople(names2, heights2)); // Output: ["Bob", "Alice", "Bob"]


const names3 = ["Sarah", "David", "Lily"];
const heights3 = [155, 160, 150];
console.log("Output:", sortPeople(names3, heights3)); // Output: ["David", "Sarah", "Lily"]
