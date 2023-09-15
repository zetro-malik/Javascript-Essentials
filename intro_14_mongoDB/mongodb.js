const { MongoClient } = require('mongodb');
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);


//create database and collection
async function createCollection(){
try{
   await client.connect();
   const db = client.db("nodejs"); 
   await db.createCollection("customers"); // Use async/await here
   console.log("Collection created!");
}catch(err){
  console.error(err)

}finally{
  await client.close()
}
}

createCollection()