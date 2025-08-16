// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let text = "I am Ramash Halder, I recently passed out B.Tech in electronics and communication at Swami Vivekananda Institution of Science and Technology."

let a = text.toLowerCase()

function counter(){
    let vowels = "aeiou"
    let count = 0
    for (const element of a) {
        if(vowels.includes(element)){
            count ++
        }
        
    }
    
    return count
    

}
console.log(counter());


// console.log("Ram".includes("Rajesh"));




