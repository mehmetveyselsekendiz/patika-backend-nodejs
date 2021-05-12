let radius = process.argv.slice(2)
let area_of_the_circle = Math.PI * Math.pow(radius[0],2)
console.log(`The area of the circle is ${area_of_the_circle.toFixed(2)}`)