var pg = require('pg');

var config={
  user:'postgres',
  password:123,
  host:'localhost',
  post:5432,
  database:'EmployeeDB',
  max:10,
  idleTimeoutMillis:10000
}

var pool = new pg.Pool(config);

function sqlQuery(sql,cb){
  pool.connect((err,client,done)=>{
    if(err){
      console.log('Loi ket noi');
    }
    client.query(sql,cb)
    done();
  })
}

function getInfo(id,cb){
  sqlQuery(`select * from "NhanVien" where id = ${id}`,cb);
}

function like(id,cb){
  sqlQuery(`With rows As (
              update "NhanVien" set nlike =nlike + 1 where id = ${id} returning *
            )
            select * from rows`,(err,result)=>{
              if(err){
                console.log('Loi truy van Like');
              }else{
                cb(result.rows[0].nlike)
              }
            });
}
function unlike(id,cb){
  sqlQuery(`With rows As (
              update "NhanVien" set nunlike =nunlike + 1 where id = ${id} returning *
            )
            select * from rows`,(err,result)=>{
              if(err){
                console.log('Loi truy van Like');
              }else{
                cb(result.rows[0].nunlike)
              }
            });
}

// allInfo((err,result)=>{
//   console.log(result.rows[0]);
// })
// unlike(1,nunlike=>{
//   console.log(nunlike);
// });
// count((err,result)=>{
//   console.log(result.rows[0].count);
// })

function allInfo(cb){
    sqlQuery(`select * from "NhanVien" order by id ASC`,cb);
}

function count(cb){
  sqlQuery(`select count(id) as count from "NhanVien"`,cb);
}

module.exports = {sqlQuery,getInfo,like,unlike,allInfo,count};
