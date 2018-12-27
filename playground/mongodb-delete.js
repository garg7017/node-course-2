const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log("Unable to connect to the Mongo Db Server");
	}

	console.log("Connected to Mongo DB Server");

	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });


	// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Todos').findOneAndDelete({
		_id: new ObjectID('5c1f666439bfe33a58f34c16')
	}).then((result) => {
		console.log(result);
	});





	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });


	// db.collection('Users').find({name:'garg'}).toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log("unable to fetch the Users collection");
	// })


	db.close();
});


