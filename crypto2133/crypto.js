var crypto = require('crypto-js');

// var message ='Hello everybody';
//
// var en =crypto.AES.encrypt(message,'kAS$F2F2dgf224FSF');
// console.log(en.toString());
//
// var de = crypto.AES.decrypt(en.toString(),'kAS$F2F2dgf224FSF');
// console.log(de);
// var plaintext = de.toString(crypto.enc.Utf8);
// console.log(plaintext);

const SECRET_KEY = 'HJGgR5%f^$%tehca';
function encrypt(text){
  return crypto.AES.encrypt(text,SECRET_KEY).toString();
}

function decrypt(text){
  return crypto.AES.decrypt(text,SECRET_KEY).toString(crypto.enc.Utf8);
}

module.exports = {encrypt,decrypt};
