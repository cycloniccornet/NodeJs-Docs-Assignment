const express = require('express');
const app = express();

app.use(express.static(__dirname + "/static"))

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
})

app.get("/Javascript", (req, res) => {
    return res.sendFile(__dirname + "/javascript.html");
})

app.get("/Node.js", (req, res) => {
    return res.sendFile(__dirname + "/nodejs.html");
})

app.get("/Front-end", (req, res) => {
    return res.sendFile(__dirname + "/frontend.html");
})

const port = process.env.PORT || 80;
app.listen(port, (error) =>{
    if (error){
        console.log( "Server could not start.. Error: " + error);
    }
    console.log("Server started on port", Number(port))
});
