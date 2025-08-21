const fs = require("fs")
// const fs = require("fs/promises")

console.log(fs);
console.log("Starting");
// fs.writeFileSync("Ram.txt", "Ram is a good boy");
fs.writeFile("Ram2.txt", "Ram is a nice guy", ()=>{
    console.log("done");
    fs.readFile("Ram2.txt", (error, data)=>{
        console.log(error, data.toString());
        
    })
    
})

fs.appendFile("Ram.txt", " and he is handsome.", (e, d)=>{
    console.log(d);
    
})
console.log("Ending");
