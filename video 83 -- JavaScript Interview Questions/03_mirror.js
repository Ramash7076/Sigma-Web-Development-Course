// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


let a = "Ram"
let arr = Array.from(a)
let reverseString = arr.reverse()
let st = reverseString.join("")
console.log(a.concat(st))




