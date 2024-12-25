function tem(num) {
    if (num < 0) {
        console.log("Cold outside")
    } else if (num >= 0 && num <= 20) {
        console.log("weather is cool")
    } else if (num >= 20 && num <= 30) {
        console.log("weather is warm")
    } else { console.log("hot outside..") }
}

console.log(tem(129))