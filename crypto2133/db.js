var pg = require('pg')
var {encrypt,decrypt} = require('./crypto.js');
var config ={
  user:'postgres',
  password: 123,
  host:'localhost',
  port: 5432,
  database: 'EmployeeDB',
  max:100,
  idleTimeoutMillis:10000
}

var pool = new pg.Pool(config);

function sqlQuery(sql,cb){
  pool.connect((err,client,done)=>{
    if(err){
      console.log('LoI ket noi');
    }
    client.query(sql,cb)
    done();
  })
}

function addUser(user,pass,image,phone,cb){
  var passEn = encrypt(pass);
  sqlQuery(`insert into "User"(username,password,image,phone) values ('${user}','${passEn}','${image}','${phone}')`,cb)
}
function update(user,image,phone,cb){
  sqlQuery(`update "User" set image='${image}',phone ='${phone}' where user ='${user}'`,cb)
}

function viewUser(user,pass,cb){
  sqlQuery(`select * from "User" where username= '${user}'`,(err,result)=>{
    if(err){
      return cb(err)
    }
    if(!result.rows[0]){
      cb('User')
    }else{
      var passDe = decrypt(result.rows[0].password);
      if(pass != passDe){
        cb('Pass')
      }else{
        cb(result);
      }
    }
  })
}

function showUser(user,cb){
  sqlQuery(`select * from "User" where username= '${user}'`,(err,result)=>{
    if(err){
      return cb(err)
    }
    cb(result.rows[0])
  })
}

// showUser('nam',function(result){
// console.log(result);
// })
// viewUser('namdf','dad',(result)=>{
//   console.log(result);
// })

// addUser('thi','abc','5.jpg',165416546,(err,result)=>{
//   if(err){
//     return console.log('Loi thuc thi');
//   }
// })

// viewUser('nam',(err,result)=>{
//   if(err){
//      return console.log('Loi thuc thi');
//    }
//    console.log(result.rows[0]);
// })
module.exports = {addUser,viewUser,showUser,update};
