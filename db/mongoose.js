var mongoose = require('mongoose');

mongoose.Promise = global.Promise;	
// mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/TodoAppNew");

mongoose.connect("mongodb://localhost:27017/TodoAppNew");


module.exports = {
	mongoose
};