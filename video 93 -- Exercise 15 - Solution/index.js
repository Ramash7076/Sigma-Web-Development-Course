// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basePath = "C:\\Users\\User\\OneDrive\\Desktop\\Sigma Web Development Course\\Sigma-Web-Development-Course\\video 93 -- Exercise 15 - Solution"

let files = await fs.readdir(basePath)  // Reads all files & folders inside basePath

for (const item of files) {

    let ext = item.split(".")[item.split(".").length - 1]     // Splits filename by '.' and takes the last part as the extension

    if (ext != "js" && ext != "json" && item.split(".").length > 1) {    // If the file is NOT js or json AND it has an extension(not just a folder or hidden file)
        if (fsn.existsSync(path.join(basePath, ext))) {     //Example: For photo.png, check → basePath/png/
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))    //Example: photo.png → moved into → png/photo.png
        }
        else {
            fs.mkdir(ext)       // Create a new folder with that extension name (mkdir)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }


}


