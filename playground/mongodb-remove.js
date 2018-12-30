var {ObjectId} = require('mongodb');

const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../models/Todo');

//remove

//findOneAndRemove

//findByIdAndRemove


// Todo.remove({}).then((todos) => {
// 	console.log(todos);
// });


Todo.findByIdAndRemove('5c27f0e8538d88f82ec4d3a6').then((todo) => {
	console.log(todo);
})



