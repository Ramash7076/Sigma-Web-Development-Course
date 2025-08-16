// console.log("Hey I am a box")

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector(".image").src = thumbnail
    document.querySelector(".h2").innerHTML = title
    document.querySelector(".channel").innerHTML = cName

    if (views >= 1000000) {
        views = Math.floor(views / 1000000) + "M"
    }
    else if(views>= 1000){
        views = Math.floor(views / 1000) + "K"
    }
    
    document.querySelector(".views").innerHTML = views + " views"

    if(monthsOld<=12){
        monthsOld = monthsOld + " months ago"
    }
    else{
        monthsOld = Math.floor(monthsOld/12) + " years ago"
    }

    document.querySelector(".month").innerHTML = monthsOld 
    document.querySelector(".duration").innerHTML = duration
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")



