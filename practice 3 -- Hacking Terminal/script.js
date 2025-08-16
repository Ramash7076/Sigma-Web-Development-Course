
function randColor() {
    let a1 = Math.floor(Math.random() * 255)
    let a2 = Math.floor(Math.random() * 255)
    let a3 = Math.floor(Math.random() * 255)

    return `rgb(${a1}, ${a2}, ${a3})`
}

document.body.style.backgroundColor = randColor()

function time() {
    return new Promise(resolve => {
        
    
    let delay = Math.floor(1000 + (Math.random() * (7000 - 1000))) 
    setTimeout(() => {
        resolve(`done in ${delay}`)
    }, delay);

    })
}


async function runTask() {
    console.log('started....');
    let result = await time()
    console.log(result);
 
}
// document.querySelector(".h2") = 


