let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yeyy you are clicked</b> Enjoy your click!!"
})

button.addEventListener("contextmenu", ()=>{
    alert("don't hack us by right click")
})
document.addEventListener("keydown", (e)=>{
   console.log(e, e.key, e.keyCode)
})

