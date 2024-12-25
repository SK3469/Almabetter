// let minute =function (num){
//     return num*60
// }
// console.log(minute(3))
// console.log(minute(0))
// console.log(minute(-5)) //this is inccorect parameters for time then 


// user if-esle or ternary oprator

function minute(num){
return num>=0 ? num*60 : "invalid time sequence."
}
console.log(minute(3))
console.log(minute(0))
console.log(minute(-5))