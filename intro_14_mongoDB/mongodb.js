const { MongoClient } = require('mongodb');


const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);


//create database and collection
async function createCollection() {
  try {
    await client.connect();
    const db = client.db("nodejs");
    await db.createCollection("customers"); // Use async/await here
    console.log("Collection created!");
    await client.close()
  } catch (err) {
    console.error(err)

  } finally {
    await client.close()
  }
}

async function addDocument() {
  try {
    await client.connect()
    const db = client.db("nodejs")
    const customers = db.collection("customers");
    const products = db.collection("products");


    await customers.deleteMany({});

    //takes in a document : insertone takes document
    let res =await customers.insertOne( {name: "Company Inc",address: "Highway 37"});

    console.log("customer added successfully",res)
    
    // insert many document
    res= await customers.insertMany([
      { name: 'John', address: 'Highway 71'},
      { name: 'Peter', address: 'Lowstreet 4'},
      { name: 'Amy', address: 'Apple st 652'},
      { name: 'Hannah', address: 'Mountain 21'},
      { name: 'Michael', address: 'Valley 345'},
      { name: 'Sandy', address: 'Ocean blvd 2'},
      { name: 'Betty', address: 'Green Grass 1'},
      { name: 'Richard', address: 'Sky st 331'},
      { name: 'Susan', address: 'One way 98'},
      { name: 'Vicky', address: 'Yellow Garden 2'},
      { name: 'Ben', address: 'Park Lane 38'},
      { name: 'William', address: 'Central st 954'},
      { name: 'Chuck', address: 'Main Road 989'},
      { name: 'Viola', address: 'Sideway 1633'}
    ]);
    console.log("customers added successfully",res)

    //in res, getting back the documentID 

    //inserting with custom documentID
    res= await products.insertMany([
      { _id: 154, name: 'Chocolate Heaven'},
      { _id: 155, name: 'Tasty Lemon'},
      { _id: 156, name: 'Vanilla Dream'}
    ]);

    console.log("products added successfully",res)

    await client.close()

  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
  }
}

//createCollection()

addDocument();