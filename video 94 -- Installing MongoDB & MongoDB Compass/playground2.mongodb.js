
use('sigmaDatabse');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
        "Name": "Java",
        "Price": 20000,
        "Instructor": "Harry"
    },
    {
        "Name": "Python",
        "Price": 18000,
        "Instructor": "Alice"
    },
    {
        "Name": "JavaScript",
        "Price": 15000,
        "Instructor": "Bob"
    },
    {
        "Name": "C++",
        "Price": 17000,
        "Instructor": "Charlie"
    },
    {
        "Name": "React.js",
        "Price": 22000,
        "Instructor": "David"
    },
    {
        "Name": "Node.js",
        "Price": 21000,
        "Instructor": "Eve"
    },
    {
        "Name": "MongoDB",
        "Price": 19000,
        "Instructor": "Frank"
    },
    {
        "Name": "HTML & CSS",
        "Price": 12000,
        "Instructor": "Grace"
    },
    {
        "Name": "Angular",
        "Price": 23000,
        "Instructor": "Hannah"
    },
    {
        "Name": "Django",
        "Price": 24000,
        "Instructor": "Ivy"
    }
]);


// Print a message to the output window.
console.log(`Done Inserting Data.`);

