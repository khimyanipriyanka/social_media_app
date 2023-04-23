const express = require('express');
const mongoose = require('mongoose');

const postRoutes = require('./routes/index.js');

const dburl = require('./model/db_config');

const app = express();

app.use(express.json());
app.use('/posts',postRoutes);

mongoose.connect(dburl).then(() => {
    console.log("DB Connected");
}).catch(err => {
    console.log(err.message);
});



const port = process.env.port || 8000;

app.listen(port,()=>{
    console.log("Server listening");
})

