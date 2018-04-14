const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abC!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err,hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$bcKBhG8nRcUMZSzPcLnkJuvyStDpBBaaWbsrmf.GRTTvAxSd5E6vq';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

//
// var data = {
//    id : 10
// };
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Messaage: ${message}`);
// console.log(`Hashed Message: ${hash}`);
//
// var data = {
//   id : 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//   console.log('Data isnt manipulated');
// }else {
//   console.log('Data is manipulated');
// }
