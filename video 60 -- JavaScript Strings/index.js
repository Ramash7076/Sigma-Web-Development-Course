console.log("This is Strings tutorial")

let a = "Ram";
console.log(a[0])
console.log(a[1])
console.log(a[2])
// console.log(a[3])        //output: undefined

console.log(a.length)

let real_name = "Ram"
let friend = "Shyam"
console.log("His name is " + real_name + " and his friends name is " + friend)

console.log(`My name is ${real_name} and my friend is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())        //toUpperCase is a funtion
console.log(b.toLowerCase())        //toLowerCase is also a funtion
console.log(b.length)               //length is a property
console.log(b.slice(1, 4))
console.log(b.slice(1))

console.log(b.replace("Sh", "55"))
console.log(b.concat(a))
console.log(b.concat(a, "Pratim", "Kallol"))
console.log(b.indexOf("iv"))
