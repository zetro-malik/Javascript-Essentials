const { MongoClient } = require('mongodb');


const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);


//base try catch class for repeated code
async function baseClientConnect(customLogic) {
  try {
    await client.connect();
    await customLogic()
    await client.close();
  } catch (err) {
    console.error(err)
  } finally {
    await client.close();
  }
}

//create database and collection
async function createCollection() {
  const db = client.db("nodejs");
  await db.createCollection("customers"); // Use async/await here
  console.log("Collection created!");
}

async function addDocument() {
  const db = client.db("nodejs")
  const customers = db.collection("customers");
  const products = db.collection("products");


  //delete if there any record previously added
  await customers.deleteMany({});
  await products.deleteMany({});


  //takes in a document : insertone takes document
  let res = await customers.insertOne({ name: "Company Inc", address: "Highway 37" });

  console.log("customer added successfully", res)

  // insert many document
  res = await customers.insertMany([
    { name: 'John', address: 'Highway 71' },
    { name: 'Peter', address: 'Lowstreet 4' },
    { name: 'Amy', address: 'Apple st 652' },
    { name: 'Hannah', address: 'Mountain 21' },
    { name: 'Michael', address: 'Valley 345' },
    { name: 'Sandy', address: 'Ocean blvd 2' },
    { name: 'Betty', address: 'Green Grass 1' },
    { name: 'Richard', address: 'Sky st 331' },
    { name: 'Susan', address: 'One way 98' },
    { name: 'Vicky', address: 'Yellow Garden 2' },
    { name: 'Ben', address: 'Park Lane 38' },
    { name: 'William', address: 'Central st 954' },
    { name: 'Chuck', address: 'Main Road 989' },
    { name: 'Viola', address: 'Sideway 1633' }
  ]);
  console.log("customers added successfully", res)

  //in res, getting back the documentID 

  //inserting with custom documentID
  res = await products.insertMany([
    { _id: 154, name: 'Chocolate Heaven', price: 500 },
    { _id: 155, name: 'Tasty Lemon', price: 25 },
    { _id: 156, name: 'Vanilla Dream', price: 72 }
  ]);

  console.log("products added successfully", res)
}

async function searchDocument() {
  const db = client.db("nodejs")
  const customers = db.collection("customers")
  const products = db.collection("products")

  // finds first founded document "{}" in here we provided queries
  let result = await customers.findOne({})
  console.log("results of findOne  = ", result)

  //returns all filtered=>{} records, need to convert it into array otherwise it returns a cursor
  result = await customers.find({}).toArray()
  console.log("results of find  = ", result)

  // filter the search
  // The second parameter of the find() method is the projection object that describes which fields to include in the result.
  // You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). If you specify a field with the value 0, all other fields get the value 1, and vice versa:
  result = await customers.find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray()
  console.log("results of projections  = ", result)

  //get only address field
  result = await customers.find({}, { projection: { _id: 0, address: 1 } }).toArray()
  console.log("results of projections of only address fields  = ", result)


}

async function filterDocument() {
  const db = client.db("nodejs");
  const customers = db.collection('customers');
  const products = db.collection('products');

  //The first argument of the find() method is a query object, and is used to limit the search.
  //filter by address where its "Park Lane 38"
  let result = await customers.find({ address: "Park Lane 38" }).toArray();
  console.log("basic address filter = ", result);

  //Regular expressions can only be used to query strings.
  //To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:

  result = await customers.find({ address: /^S/ }).toArray();
  console.log("Regular Expression Filter = ", result);

  // Filter documents where price is less than 30
  result = await products.find({ price: { $lt: 30 } }).toArray();
  console.log("price less than 30 filter:", result);

  // Filter documents where age is greater than or equal to 30
  result = await products.find({ price: { $gte: 30 } }).toArray();
  console.log("price greater than or equal to 30 filter:", result);

  //Inequality Filter: Filter documents where a field is not equal to a specific value.
  result = await customers.find({ name: { $ne: "John" } }).toArray();
  console.log("Name not equals 'John':", result);

  //Logical OR Filter: Combine multiple filter conditions using the logical OR operator.
  result = await customers.find({
    $or: [
      { name: "John" },
      { address: "Lowstreet 4" }
    ]
  }).toArray();
  console.log("Name equals 'John' OR Age greater than or equal to 30:", result);

}


async function sortDocument() {
  const db = client.db("nodejs");
  const customers = db.collection('customers');
  const products = db.collection('products');

  //Sort the result  alphabetically by name:
  let result = await customers.find({}).sort({ name: 1 }).toArray()
  console.log('display names in acending order', result)

  //Sort the result reverse alphabetically by name:
  result = await customers.find({}).sort({ name: -1 }).toArray()
  console.log('display names in decending order', result)
}

async function deleteDocument(){
  const db = client.db("nodejs");
  const customers = db.collection('customers');
  const products = db.collection('products');

  //Delete the document with the address "Mountain 21":
  let result = await customers.deleteOne({address:"Mountain 21"});
  console.log("deleted one document ",result);

  //Delete all documents were the address starts with the letter "O":
  result = await customers.deleteMany({address:/^O/});
  console.log("deleted all document startig with O",result);

}


//baseClientConnect(createCollection)

//baseClientConnect(addDocument);

//baseClientConnect(searchDocument)

//baseClientConnect(filterDocument)

//baseClientConnect(sortDocument)


baseClientConnect(deleteDocument)