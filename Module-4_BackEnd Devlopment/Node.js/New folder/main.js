const http = require("http");

const processRequest =(req,res)=>{
    res.statusCode=200;
    res.end ("My first Node Project");
};

const server = http.createServer(processRequest);




server.listen(3000,()=>{
    console.log("server lisening at port number 3000");
});
