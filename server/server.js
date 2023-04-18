const express = require('express');

const app = express();

const port = process.env.port || 8000;

app.get("/",(req,res) => {
    res.send("pk here");
})


app.listen(port,()=>{
    console.log("Server listening");
})
