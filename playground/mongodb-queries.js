var {ObjectId} = require('mongodb');

const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../models/Todo');

var id = '5c252ebcc534931825e392ab-';


// if(!ObjectId.isValid(id)){
// 	return console.log("Id not valid");
// }

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos',todos);
});


Todo.findOne({
	_id:id
	// completed:false
}).then((todo) => {
	console.log("Todo",todo);
})

Todo.findById(id).then((todo) => {
	console.log("find by id todo",todo);
}).catch((e) => {
	console.log(e);
});