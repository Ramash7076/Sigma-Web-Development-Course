

// function r(name) {
//     console.log("Hey " + name + " you are nice!")
//     console.log("Hey " + name + " you are good!")
//     console.log("Hey " + name + " your tshirt is nice!")
//     console.log("Hey " + name + " your course is good too!")
// }

// r("Ram")

function sum(a, b, c = 3) {         
    // console.log(a + b)
    return a + b + c;
}

result1 = sum(2, 5)
result2 = sum(5, 5)
result3 = sum(45, 5, 7)

console.log("The sum of this number is ", result1)
console.log("The sum of this number is ", result2)
console.log("The sum of this number is ", result3)


const fun = (x) => {                            //arrow function
    console.log("I am a arrow function", x)
}

fun(45)
fun(67)
fun(78)