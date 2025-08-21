import { writeFile } from "fs";
import fs from "fs/promises"

let a = await fs.readFile("Ram.txt")

let b = await fs.appendFile("Ram.txt", "\n\nThis is amazing promise")
console.log(a.toString(), b);
