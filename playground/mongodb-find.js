const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log("Unable to connect to the Mongo Db Server");
	}

	console.log("Connected to Mongo DB Server");

	// db.collection('Todos').find({
	// 	completed:true,
	// 	_id: new ObjectID('5c1f664aa3435a39802f5021')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch Todos',err);
	// });
	

	// db.collection('Todos').find({completed:false}).count().then((count) => {
	// 	console.log(`Todos Count: ${count}`);
	// },(err) => {
	// 	console.log('Unable to count Todos');
	// })


	db.collection('Users').find({name:'garg'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {
		console.log("unable to fetch the Users collection");
	})


	db.close();
});


