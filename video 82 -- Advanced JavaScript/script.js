

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })

}
function sum(a, b, c) {
    return a + b + c
}
(async function main() {             // IIFE

    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let [x, y, ...rest] = [3, 7, 5, 9, 1, 4]         // Destucturing
    // console.log(x, y, rest)

    let obj = {
        a: 4,
        b: "Ram",
        c: 34
    }
    let { a, b } = obj
    console.log(a, b)

    let arr = [3, 4, 3]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr));       // '...' is spread operator

})()


// quick Quiz

// const a = "the", b = "no"
// const c = { a, b }
// console.log(c);

// output: 
// {a: 'the', b: 'no'}
// a: "the"
// b: "no"
// [[Prototype]]: Object
