// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb server");
  }

  console.log("Connected to Mongo DB server");
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c77f41b576dbb9181511f0f')
  },{
    $set: {
      name: "Sahaya Vijay"
    },
    $inc: {
      age: 4
    }

  },
  {
  returnOriginal: false
}
).then((res) => {
  console.log(res);
})


  client.close();
});
