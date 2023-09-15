const { MongoClient } = require('mongodb');
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);

async function add(){
try{
  await client.connect();
  const db = client.db("nodejs"); // Replace with your database name
    const collection = db.collection("lecture"); // Replace with your collection name
  await collection.insertOne({
    "hello":"world"
  })
}catch(err){
  console.error(err)

}finally{
  await client.close()
}
}

add()