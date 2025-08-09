// let rand = Math.random()

// let boxes = document.getElementsByClassName("box")

// boxes[1].style.backgroundColor = "Purple"

// console.log(boxes)


document.querySelectorAll(".box").forEach(e => {
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    e.style.backgroundColor = `rgb(${r},${g},${b})`;
})

document.querySelectorAll(".box").forEach(e => {
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    e.style.color = `rgb(${r},${g},${b})`;
})


