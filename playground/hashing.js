const {SHA256} = require('crypto-js');
const  jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

password = 'abc123';

// bcrypt.genSalt(10,(err,salt) => {
// 	bcrypt.hash(password,salt,(err,hash) => {
// 		console.log(hash);
// 	});
// });


var hashedPassword = '$2a$10$9uPHJp98fD/UtGrnfDqJGu4G8UOEKOcUzRoxkw.pBv9C7ERyYyAcy';

bcrypt.compare(password,hashedPassword,(err,res) => {
	console.log(res);
});


// var data = {
// 	id:7
// };

// var token = jwt.sign(data,'MyScret');
// console.log(token);

// var decoded = jwt.verify(token,'MyScret');
// console.log(decoded);







// const {SHA256} = require('crypto-js');

// var message = 'Hi I a a password';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data = {
// 	id:4
// }


// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesccret').toString()
// }


// var resultHash = SHA256(JSON.stringify(data) + 'somesccret').toString();

// if(resultHash === token.hash){
// 	console.log("Data not changed");
// } else {
// 	console.log("Data changed. Do not trust");
// }
