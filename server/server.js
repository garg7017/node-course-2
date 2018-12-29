var {ObjectId} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {Todo} = require('../models/Todo');
var {User} = require('../models/User');



var app = express();

app.use(bodyParser.json());

/** Save Todo in DB */

app.post('/todos',(req,res) => {
	//console.log(req.body);
	var newTodo = new Todo({
		text:req.body.text
	});

	newTodo.save().then((doc) => {
		res.send(doc);
	},(e) => {
		// console.log("unable to save Todo");
		res.status(400).send(e);
	});

});


/** Fetch Todo from DB */

// app.get('/todos',(req,res) => {
// 	Todo.find().then((todos) => {
// 		res.send(todos);
// 	},(e) => {
// 		res.status(400).send(e);
// 	});
// });




app.get('/todos/:id',(req,res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send('Id is not valid. Please check again')
	} else {
		Todo.findById(id).then((todo)=>{
			if(todo.text !== ''){
				res.send({todo});	
			} else {
				res.status(404).send('Todo is blank');
			}
		},(e) => {
			res.status(400).send();
		}).catch((e) => {
			res.status(400).send();
		});
	}
})







app.listen(3000,() => {
	console.log("Started on Port 3000");
})

