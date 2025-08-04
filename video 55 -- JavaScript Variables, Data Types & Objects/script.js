console.log("Hey this is tutorial 55")

// var a = 6;           //var is a global scoped element
// var b = 9;
// var c = "Ramash"
// var _a = "Abhik"
// var 55a = "Shyam"    //Invalid because it's starting with number

// console.log(a + b + 12)
// console.log( typeof a, typeof b, typeof c)

const a1 = 6;
// a1 = a1 + 1;        //throwing error because const value cann't changable

let a = 6;          //let is a block scoped element 
let b = 9;

{
    let a = 2;
    console.log(a)
}
console.log(a)

let x = "Harry Bhai";
let y = 44;
let z = 3.45;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o = {
    "name": "Harry",
    "jobe code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
