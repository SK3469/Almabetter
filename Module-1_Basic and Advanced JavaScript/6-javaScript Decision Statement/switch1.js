function type(input){
    switch(typeof input){
        case'string':
        console.log("input is string.")
        break;
        case'number':
        console.log("input is number")
        break;
        case'boolean':
        console.log("input is boolean")
        break;
        default:
            console.log("invalid input")
            break;
    }
}
console.log(type(true))
