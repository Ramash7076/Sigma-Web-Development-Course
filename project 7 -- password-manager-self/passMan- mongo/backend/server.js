const express = require('express')
const dot = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require("body-parser")
var cors = require('cors')

dot.config()

const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
client.connect();


// Database Name
const dbName = 'passMan';


app.get('/', async (req, res) => {
    
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})


app.post('/', async (req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})

app.delete('/', async (req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success: true, result: findResult})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
