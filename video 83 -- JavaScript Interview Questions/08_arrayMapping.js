// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


// let arr = [3, 5, 6]

// async function multiply(){
//     let promises = new Promise(resolve => {
//         setTimeout(() => {
//             resolve(arr.map(num => num *2))
//         }, 500);
//     })
//     // promises.then(arr.map(num => num *2))
//     let result = await promises
//     console.log(result);
    
// }


// multiply()


// another way to solve


let arr = [3, 5, 6]

async function multiply(){
    let promises = arr.map(num =>{
        return new Promise(resolve =>{
            setTimeout(() => {
                resolve(num * 2)
            }, 5000);
        })
    })
    
    let result = await Promise.all(promises)
    console.log(result);
    
}


multiply()







//another way to solve

// Asynchronous function
// async function doubleWithDelay(numbers) {
//     return numbers.map(num =>
//         new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(num * 2);
//             }, 500); // 500 ms delay
//         })
//     );
// }

// // Example usage
// (async () => {
//     let nums = [1, 2, 3, 4];
//     let promises = await doubleWithDelay(nums);
//     console.log(promises); // Array of Promises

//     // If you want the resolved values:
//     let results = await Promise.all(promises);
//     console.log(results); // [2, 4, 6, 8]
// })();
