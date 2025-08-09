console.log("Ramash")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "Green"


console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "aqua"
})

console.log(document.getElementsByTagName("div"))

let b = document.getElementsByTagName("div")
console.log(b[4].matches("#redbox"))
console.log(b[3].closest(".container"))
console.log(document.querySelector(".container").contains(b[2]))
console.log(document.querySelector(".container").contains(b[0]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))


