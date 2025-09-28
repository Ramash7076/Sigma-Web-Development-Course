const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config()

const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())


// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
client.connect();

// Database Name
const dbName = 'passMan-self';

// Get all the documents of the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

// Post a the document on the passwords
app.post('/', async (req, res) => {
    let password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})

// Delete a the document on the passwords
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
