import { writeFile } from "fs";
import fs from "fs/promises"

let a = await fs.readFile("Ram.txt")

fs.appendFile("Ram.txt", "\n\nThis is amazing promise")
fs.writeFile("Ram3.txt", "Ram is a handsome guy anf he loves playing cricket")
console.log(a.toString());
