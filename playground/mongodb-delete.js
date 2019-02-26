// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("Unable to connect to MongoDb server");
  }

  console.log("Connected to Mongo DB server");
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name: "Hello"}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').deleteOne({age: 25}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c75534b576dbb918151102f')}).then((res) => {
    console.log(res);
  })

  client.close();
});
