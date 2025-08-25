// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

import mongoose from "mongoose";
import express from "express"
import { employees } from "./models/employees.js";

let a = await mongoose.connect("mongodb://localhost:27017/company")

const app = express()
const port = 3000

app.get('/', (req, res) => {

    let name = ["Harry", "Rohan", "Shubham", "Ramash"]
    let randIndexName = Math.floor(Math.random() * name.length);
    let randName = name[randIndexName];

    let language = ["Java", "Python", "PHP", "JS"]
    let randIndexLang = Math.floor(Math.random() * language.length);
    let randLang = language[randIndexLang];

    let city = ["Kolkata", "New York", "London", "Paris", "New Delhi"]
    let randIndexCity = Math.floor(Math.random() * city.length);
    let randCity = city[randIndexCity];

    let randSalary = Math.floor(200000 + Math.random() * 200000)

    let randManager = Math.random() > 0.5 ? true : false

    const employee = new employees({ name: randName, salary: randSalary, language: randLang, city: randCity, isManager: randManager })
    employee.save()
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let employee = await employees.deleteMany({})
    res.send("Hey")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
