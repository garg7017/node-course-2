const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log("Unable to connect to the Mongo Db Server");
	}

	console.log("Connected to Mongo DB Server");

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5c1f66794c47cd35a08c9bfc')
	// },{
	// 	$set:{
	// 		completed:true,
	// 		text:"...eating..."
	// 	}
	// },{
	// 	resturnOriginal:false
	// }).then((result) => {
	// 	console.log(result);
	// });



	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID(('5c1f67b1a892591b04f9f376'))
	},{
		$set:{
			name:'Lokesh garg',
			location:'HRC Professional hub, Indirapuram'
		},
		$inc:{
			age:3
		}
	},{
		resturnOriginal:false
	}).then((result) => {
		console.log(result);
	})

	db.close();
});


