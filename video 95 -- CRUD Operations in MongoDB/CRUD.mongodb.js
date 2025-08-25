// Create
use("CRUDdb")       // Create a database

db.createCollection("Courses")      // Creating a collection

// db.Courses.insertOne({      //insert a document
//     name: "Harry's web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })

// db.Courses.insertMany([
//   {
//     "Name": "Java",
//     "Price": 20000,
//     "Instructor": "Harry"
//   },
//   {
//     "Name": "Python",
//     "Price": 18000,
//     "Instructor": "Alice"
//   },
//   {
//     "Name": "JavaScript",
//     "Price": 15000,
//     "Instructor": "Bob"
//   },
//   {
//     "Name": "C++",
//     "Price": 17000,
//     "Instructor": "Charlie"
//   },
//   {
//     "Name": "React.js",
//     "Price": 22000,
//     "Instructor": "David"
//   },
//   {
//     "Name": "Node.js",
//     "Price": 21000,
//     "Instructor": "Eve"
//   },
//   {
//     "Name": "MongoDB",
//     "Price": 19000,
//     "Instructor": "Frank"
//   },
//   {
//     "Name": "HTML & CSS",
//     "Price": 12000,
//     "Instructor": "Grace"
//   },
//   {
//     "Name": "Angular",
//     "Price": 23000,
//     "Instructor": "Hannah"
//   },
//   {
//     "Name": "Django",
//     "Price": 24000,
//     "Instructor": "Ivy"
//   }
// ])

// Read
// let a = db.Courses.find({price: 0})
// console.log(a.count());  // a.count returns how many documents have price: 0
// console.log(a.toArray());  // a.toArray returns all the documents which have price: 0

// let b = db.Courses.findOne({price: 0})
// console.log(b);

// Update
// db.Courses.updateOne({price: 100}, {$set:{price: 1000}})
// db.Courses.updateMany({price: 100}, {$set:{price: 10}})

// Delete
// db.Courses.deleteOne({price: 1000})
db.Courses.deleteMany({price: 10})

