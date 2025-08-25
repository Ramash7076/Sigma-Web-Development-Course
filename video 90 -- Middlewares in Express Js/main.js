const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const birds = require('./routes/birds')



app.use(express.static("public"))
app.use('/birds', birds)


// Middleware 1
app.use((req, res, next)=> {
    console.log(req.headers);
    req.ram = "Ram is here"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
//   res.send("Hacked by Middleware 1")
  next()
})

// Middleware 2
app.use((req, res, next)=> {
    req.ram = "Abhik is here"
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello abaut!'+ req.ram)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
