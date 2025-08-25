import path from "path"


let myPath = "C:\\Users\\User\\OneDrive\\Desktop\\Sigma Web Development Course\\Sigma-Web-Development-Course\\video 87 -- Working with Files fs and path Modules\\Ram.txt"

console.log(path.extname(myPath));  //Showing which type of file this is

console.log(path.dirname(myPath));  // Showing directory name

console.log(path.basename(myPath)); //Showing file name like Ram.txt

console.log(path.join("c:/", "Music\\Ram.txt"));


