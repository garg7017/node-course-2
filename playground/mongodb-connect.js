//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;
// console.log(obj);


// var user = {name:'Lokesh',age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log("Unable to connect to the Mongo Db Server");
	}

	console.log("Connected to Mongo DB Server");


	// db.collection('Todos').insertOne({
	// 	text: "Something to do",
	// 	completed: false
	// },(err,result) => {
	// 	if(err){
	// 		return console.log("unable to insert");
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })




	// db.collection("Users").insertOne({
	// 	'name': 'Lokesh Garg',
	// 	'age': '26',
	// 	'location':'HRC Professional Hub, Indirapuram, Ghaziabad'
	// },(err,result) => {
	// 	if(err){
	// 		return console.log("unable to insert in Users collection");
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// })


	db.close();
});


