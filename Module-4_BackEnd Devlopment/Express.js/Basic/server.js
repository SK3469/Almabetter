// // Use require syntex....
// const http= require("http");
// //create callback function...
// const processRequest=(req,res)=>{
// console.log("Request method is"+ req.method);
// if(req.method=="GET"){
//     res.end("Get Request process by the server")
//     return;
// }
// if(req.method=="POST"){
//     res.end("POST Request process by the server")
//     return;
// }
// if(req.method=="PATCH"){
//     res.end("PATCH Request process by the server")
//     return;
// }
// if(req.method=="DELETE"){
//     res.end("DELETE Request process by the server")
//     return;
// }

// res.end("Method not Supported")
// }


// const server = http.createServer(processRequest);
// server.listen(3000, ()=>{
//     console.log("Listening to the port no 3000")
// });

const express = require("express");
const app = express();

// app.get("/",(req,res)=>{
//     res.status(200).json({Message:"Hello from Express App"})
// })

const data= [
    {
    city:"New Delhi",
    age: 32,
    salary: 30000,
    },
    {
    city:"Bombay",
    age: 25,
    salary: 30000,
    },
    {
    city:"Banglore",
    age: 32,
    salary: 30000,
    } 
];
app.get("/employees",(req,res)=>{
    res.status(200).json({data:data})
})

app.listen(3000,()=>{
    console.log("Listening on port no 3000 ")
})