const MongoClinet = require('mongodb').MongoClinet;

async function connectToMongDatabase() {
    const client = await MongoClinet.connect("mongodb://localhost:27017/")
    return client;
}
module.exports=connectToMongDatabase;