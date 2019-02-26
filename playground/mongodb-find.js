// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb server");
  }

  console.log("Connected to Mongo DB server");
  const db = client.db('TodoApp');


  // db.collection('Todos').find({
  //   _id: new ObjectID('5c73faf7b3a10e25fa1fa664')
  // }).toArray().then((docs) => {
  //   console.log('List of Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch the records', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Count of Todos : ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch the records', err);
  // })


  db.collection('Users').find({
    name: "Hello"
  }).toArray().then((docs) => {
    console.log('List of Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to get the records');
  })

  //client.close();
});
