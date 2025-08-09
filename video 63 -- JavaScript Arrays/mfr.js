let arr = [15, 3, 11, 7, 2]
// let newArr = []

// for(i=0; i<arr.length; i++){
//     const element = arr[i]
//     newArr.push(element**2)
// }



let newArr = arr.map((e, index, array) => {           //Map method
    return e % 2 == 0
})

console.log(newArr)

// let even = arr.filter(function(e){                  //Filter method
//     return e % 2 == 0
// })
// console.log(even)

let seven = (element, index, array) => {                //Filter method
    if (element > 7) {
        return true
    }
    return false
}

console.log(arr.filter(seven))


// let greaterThanSeven = (element, index,array)=>{                //Filter method using ternary operator
//     return element > 7 ? true : false
// }

// console.log(arr.filter(greaterThanSeven))


let arr2 = [90, 5, 3, 2, 50]                        //Reduce methood

let red = (a, b)=>{
    return a - b
}

console.log(arr2.reduce(red))


console.log(Array.from("Ramash"))               // Array.from method