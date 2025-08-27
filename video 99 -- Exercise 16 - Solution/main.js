// const express = require('express')
// const mongoose = require('mongoose');
// const Employee = require("./models/Emplyee")
// const app = express()

// mongoose.connect('mongodb://127.0.0.1:27017/company');
// const port = 3000

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
// })

// app.get('/genrate', async (req, res) => {
//   for (let index = 0; index < 10; index++) {
//     let e = await Employee.create({
//       name: "Harry",
//       salary: 4500000,
//       language: "Python",
//       city: "New York",
//       isManager: true
//     })
//     console.log(e);
    
//   }
//   res.render('index');
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const mongoose = require('mongoose');
const Employee = require("./models/Emplyee")

conn = mongoose.connect('mongodb://localhost:27017/Infosis');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}


app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({}) 
    // Generate random data

    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)
 

    }

    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
 