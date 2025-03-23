const express = require('express');
const app = express();
const port = 4000
const mongoDB = require("./db");
mongoDB();
const displayData=require("./Routes/DisplayData.js");
const OrderData=require("./Routes/OrderData.js");
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})
app.get('/',(req,res)=>{
    res.send('Hello World!....')
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',displayData);
app.use('/api',OrderData);
app.listen(port,()=>{
    console.log(`Example app listnening on port ${port}`);
});
