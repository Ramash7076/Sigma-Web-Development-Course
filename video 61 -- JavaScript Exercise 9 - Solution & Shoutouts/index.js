/* Create a faulty calculator using JavaScript

this faulty calculator does following:
1. It takes two numbers as inputfrom the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/


let random = Math.random()
console.log(random)
let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let c = prompt("Enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}


if (random > 0.1) {
    // console.log(`eval( ${a} ${c} ${b})`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)       //eval function is for calculate these numbers
}

else {
    c = obj[c]
    // console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}