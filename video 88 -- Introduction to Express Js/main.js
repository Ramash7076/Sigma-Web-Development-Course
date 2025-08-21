// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hey2</h1>');
// });

// server.listen(port,hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`);

// });


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from db

    //For URL: http://localhost:3000/blog/intro-to-padoshi?mode=dark&region=in
    console.log(req.params);    // output: { slug: 'intro-to-padoshi' }
    console.log(req.query);    // output: { mode: 'dark', region: 'in' }
    
    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from db
//     res.send('Hello intro-to-js')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from db
//     res.send('Hello intro-to-python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})