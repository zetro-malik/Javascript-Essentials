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
  const teachers = db.collection('teachers');


  //delete if there any record previously added
  await customers.deleteMany({});
  await products.deleteMany({});
  await teachers.deleteMany({});


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


  res = await teachers.insertMany([
    { "_id": 1, "name": "John", "age": 33, "gender": "male" },
    { "_id": 2, "name": "Alice", "age": 32, "gender": "female" },
    { "_id": 3, "name": "Bob", "age": 41, "gender": "male" },
    { "_id": 4, "name": "Emma", "age": 56, "gender": "female" },
    { "_id": 5, "name": "David", "age": 33, "gender": "male" },
    { "_id": 6, "name": "Olivia", "age": 22, "gender": "female" },
    { "_id": 7, "name": "Sophia", "age": 56, "gender": "female" },
    { "_id": 8, "name": "Liam", "age": 56, "gender": "male" },
    { "_id": 9, "name": "Noah", "age": 30, "gender": "male" },
    { "_id": 10, "name": "Ella", "age": 41, "gender": "female" },
    { "_id": 11, "name": "Daniel", "age": 56, "gender": "male" },
    { "_id": 12, "name": "Grace", "age": 27, "gender": "female" },
    { "_id": 13, "name": "Ethan", "age": 29, "gender": "male" },
    { "_id": 14, "name": "Mia", "age": 31, "gender": "female" },
    { "_id": 15, "name": "William", "age": 45, "gender": "male" },
    { "_id": 16, "name": "Ava", "age": 56, "gender": "female" },
    { "_id": 17, "name": "Benjamin", "age": 33, "gender": "male" },
    { "_id": 18, "name": "Sophie", "age": 29, "gender": "female" },
    { "_id": 19, "name": "James", "age": 33, "gender": "male" },
    { "_id": 20, "name": "Charlotte", "age": 24, "gender": "female" }
  ]
  );
  console.log("teachers added successfully", res)


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


  result = await customers.find({}).limit(2).toArray();
  console.log("limiting the result = ", result);
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

async function deleteDocument() {
  const db = client.db("nodejs");
  const customers = db.collection('customers');
  const products = db.collection('products');

  //Delete the document with the address "Mountain 21":
  let result = await customers.deleteOne({ address: "Mountain 21" });
  console.log("deleted one document ", result);

  //Delete all documents were the address starts with the letter "O":
  result = await customers.deleteMany({ address: /^O/ });
  console.log("deleted all document startig with O", result);

}

async function dropDocument() {
  const db = client.db("nodejs");
  await db.dropCollection('customers')
  console.log('customers dropped successfuly');
}

async function updateDocument() {
  const db = client.db("nodejs");
  const customers = db.collection('customers');
  const products = db.collection('products');

  //first parameter is for filtering, second to set new values
  let result = await customers.updateOne({ address: "Valley 345" }, { $set: { name: "Mickey", address: "Canyon 123" } })
  console.log("updating one document =", result)

  result = await customers.updateMany({ address: /^S/ }, { $set: { name: "Minnie" } })
  console.log('updating many documents', result)

  result = await products.updateOne({ _id: 154 }, { $set: { price: 19.99 } });
  console.log("Updating product price by ID and decrementing quantity:", result);

  // Update prices for products within a certain price range and increment stock
  result = await products.updateMany({ price: { $gte: 50, $lte: 100 } }, { $inc: { price: 10 } });
  console.log("Increasing prices and stock for products in the 50-100 range:", result);

  //rename column name
  result = await products.updateMany({}, { $rename: { name: "pname" } });
  console.log("renaming attribute name = ", result);
}


async function aggregateDocument() {
  const db = client.db("nodejs");
  const teachers = db.collection('teachers');
  //aggregate first argument is pipeline(list of operations) and 2nd is options
  //$match, $group, $sort are operators of a pipeline
  let result = await teachers.aggregate([{ $match: { gender: "male" } }]).toArray();
  console.log("using aggrate to filter male teachers", result);

  //group teacher by age, also shows name
  //$group takes , _id:(on which grouping be performed), fields to include in that group=> syntax names:{$push:"$name"} pushing all match "$name" in names  
  result = await teachers.aggregate([
    {
      $group: {
        _id: "$age",
        data: {
          $push: {
            name: "$name",
            gender: "$gender" // Include gender along with the name
          }
          // $push: "$$ROOT" brings in full document
        }
      }
    }
  ]).toArray();

  console.log("Using aggregate to group by age teachers", result);


  // find count of males teacher group by age
  // first operation in pipeline [match,group=>count]

  result = await teachers.aggregate([
    {
      $match: { gender: "male" }
    },
    {
      $group: {
        _id: "$age",
        number: {
          $sum: 1
        }
      }
    }
  ]).toArray();

  console.log("count of males teacher group by age", result);

  //give a count per age of male student and sort them by count in desc manner
  // $toDouble operator makes a field double and perfrom inc,dec and sum
  result = await teachers.aggregate([
    {
      $match: { gender: "male" }
    },
    {
      $group: {
        _id: "$age",
        number: {
          $sum: 1
        }
      }
    },
    {
      $sort: { number: -1 }
    },
  ]).limit(3).toArray();

  console.log("count of males teacher group by age count in desc manner", result);


  //unwind works on arrays, makes seperated document of each array object


}

async function addStudentData() {
  const db = client.db("nodejs");
  const universities = db.collection('universities');
  const departments = db.collection('departments');
  const courses = db.collection('courses');
  const Students = db.collection('students');

  await universities.insertMany([
    {
      "_id": 1,
      "name": "University A"
    },
    {
      "_id": 2,
      "name": "University B"
    }
  ]);

  await departments.insertMany([
    {
      "_id": 101,
      "name": "Computer Science",
      "universityId": 1
    },
    {
      "_id": 102,
      "name": "Mathematics",
      "universityId": 1
    },
    {
      "_id": 201,
      "name": "Physics",
      "universityId": 2
    },
    {
      "_id": 202,
      "name": "Chemistry",
      "universityId": 2
    }
  ]
  );

  await courses.insertMany([
    {
      "_id": 1001,
      "courseName": "Intro to Programming",
      "departmentId": 101
    },
    {
      "_id": 1002,
      "courseName": "Database Management",
      "departmentId": 101
    },
    {
      "_id": 1003,
      "courseName": "Calculus",
      "departmentId": 102
    },
    {
      "_id": 1004,
      "courseName": "Quantum Mechanics",
      "departmentId": 201
    },
    {
      "_id": 1005,
      "courseName": "Organic Chemistry",
      "departmentId": 202
    }
  ]
  );

  await Students.insertMany([
    {
      "_id": 10001,
      "name": "John",
      "age": 22,
      "courses": [1001, 1003],
      "score": [55, 22]
    },
    {
      "_id": 10002,
      "name": "Alice",
      "age": 23,
      "courses": [1001, 1002],
      "score": [47, 72]
    },
    {
      "_id": 10003,
      "name": "Bob",
      "age": 22,
      "courses": [1003],
      "score": [35]
    }
  ]
  );

  console.log('documents added succesfully');
}


async function lookupDocment() {
  const db = client.db("nodejs");
  const students = db.collection('students')


  // getting all student below 23 age  with coursedetails without course foreignkey
  let results = await students.aggregate([
    {
      $match:{age:{$lt:23}}
    },
    {
      $lookup: {
        from: "courses",
        localField: "courses",
        foreignField: "_id",
        as: 'courseDetals'
      }
    },
    {
      $unwind: "$courseDetals"
    },
    {
      $project: {
        courses: 0
      }
    }
  ]).toArray();

  console.log("student with their courses ", results)
  
  // getting student name, courseName, departmentName and universityName
  const result = await students.aggregate([
    {
      $lookup: {
        from: "courses",
        localField: "courses",
        foreignField: "_id",
        as: "courseDetails"
      }
    },
    {
      $unwind: "$courseDetails"
    },
    {
      $lookup: {
        from: "departments",
        localField: "courseDetails.departmentId",
        foreignField: "_id",
        as: "departmentDetails"
      }
    },
    {
      $unwind: "$departmentDetails"
    },
    {
      $lookup: {
        from: "universities",
        localField: "departmentDetails.universityId",
        foreignField: "_id",
        as: "universityDetails"
      }
    },
    {
      $unwind: "$universityDetails"
    },
    {
      $project: {
        _id: 1,
        name: 1,
        age: 1,
        courses: "$courseDetails.courseName",
        department: "$departmentDetails.name",
        university: "$universityDetails.name"
      }
    }
  ]).toArray();
  
  
  console.log("getting student name, courseName, departmentName",result);
}
  
//baseClientConnect(createCollection)

//baseClientConnect(addDocument);

//baseClientConnect(searchDocument)

//baseClientConnect(filterDocument)

//baseClientConnect(sortDocument)

//baseClientConnect(deleteDocument)

//baseClientConnect(dropDocument)

//baseClientConnect(updateDocument)

//baseClientConnect(aggregateDocument)

//baseClientConnect(addStudentData)   // new data for $lookup

baseClientConnect(lookupDocment)