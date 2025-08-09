console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
// console.log(boxes)

function getRandomColor(){
    val1 = Math.ceil(0 + Math.random() * 255);
    val2 = Math.ceil(0 + Math.random() * 255);
    val3 = Math.ceil(0 + Math.random() * 255);
    val4 = Math.ceil(0 + Math.random() * 0.1);
    return `rgba(${val1}, ${val2}, ${val3}, ${val4})`
}

Array.from(boxes).forEach(e=>{
    e.style.color = getRandomColor()
    e.style.backgroundColor = getRandomColor()
})