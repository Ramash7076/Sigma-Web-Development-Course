let a = 6

// function factorial(num){                         //Using reduce method
//     let arr = Array.from(Array(num + 1).keys())
//     let c = arr.slice(1,).reduce((a, b)=>{
//         return a*b
//     })
//     return c
// }

// factorial(a)


function factorial(num){                           //Using reduce methood
    let arr = Array.from(Array(num + 1).keys())
    let c = arr.slice(1,).reduce((a, b)=> a*b
    )
    return c
}

console.log(factorial(a))


let b = 8

function facFor(numbers){                               //Using for loop
    let fac = 1
    for (let index = 1; index <= numbers; index++) {
        fac = fac * index
        
    }
    return fac
}

console.log(facFor(b))