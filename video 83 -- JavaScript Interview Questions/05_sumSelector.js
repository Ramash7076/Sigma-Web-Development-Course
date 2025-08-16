// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


let a = [3, 7, 89, 234, 56, -3, 45]

function add() {
    let sum = 0
    for (const number of a) {
        if (number < 0) {
            break
        }
        sum = sum + number

    }
    return sum

}

console.log(add())