var pg = require('pg');

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
    client.query(sql,(err,result)=>{
      if(err){
        console.log('Loi insert',err);
        cb(undefined);
      }
      cb(result);
    })
    done();
  })
}

function deleteSql(id,cb){
  sqlQuery(`delete from "SanPham" where id ='${id}'`,cb)
}

function updateSql(sanPham,cb){
  sqlQuery(`update "SanPham" set title='${sanPham.title}',des='${sanPham.des},image='${sanPham.image}',link='${sanPham.link}' where id ='${sanPham.id}'`,cb)
}

module.exports ={sqlQuery,deleteSql}
