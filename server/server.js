const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('../db/mongoose');
var {Todo} = require('../models/Todo');
var {User} = require('../models/User');
var {authanticate} = require('../server/middleware/authanticate');


var app = express();


const port = process.env.PORT || 3000;

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

app.get('/todos',(req,res) => {
	Todo.find().then((todos) => {
		res.send(todos);
	},(e) => {
		res.status(400).send(e);
	});
});




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




app.delete('/todos/:id',(req,res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send('Id is not valid. Please check again')
	} else {
		Todo.findByIdAndRemove(id).then((todo)=>{
			if(!todo){
				return res.status(404).send();
			} 
			res.send(todo);
		}).catch((e) => {
			res.status(400).send();
		});
	}
})



app.patch('/todos/:id',(req,res) => {
	var id = req.params.id;
	var body = _.pick(req.body,['text','completed','bbb']);

	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set:body},{new:true}).then((todos) => {
		if(!todos){
			return res.status(400).send();
		} 
		res.send({todos});
	}).catch((e) => {
		res.status(400).send();
	});

});



/** Create new user */

app.post('/users',(req,res) => {
	var body = _.pick(req.body,['email','password']);
	var user = new User(body);
	user.save().then(() => {
		return user.generateAuthToken();
		//res.send(user);
	}).then((token) => {
		res.header('x-auth',token).send(user);
	}).catch((e) => {
		res.status(400).send(e);
	});      
});


app.post('/users/login', (req,res) => {
	var body = _.pick(req.body,['email','password']);
	User.findByCredentails(body.email,body.password).then((user) => {
		return user.generateAuthToken().then((token) => {
			res.header('x-auth',token).send(user);
		});
		// res.send(user);
	}).catch((e) => {
		res.status(400).send();
	});
});


app.get('/users/me', authanticate, (req,res) => {
	res.send(req.user);
});


app.listen(port,() => {
	console.log(`Started on Port ${port}`);
})

