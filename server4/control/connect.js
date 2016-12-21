var pg = require('pg');

var config = {
  user: 'postgres',
  password: 123,
  host: 'localhost',
  port: 5432,
  database: 'ProductDB',
  max: 100,
  idleTimeoutMillis: 10000
}

var pool = new pg.Pool(config);

function sqlQuery(sql,cb){
  pool.connect((err,client,done)=>{
    if(err){
      return console.log('Loi ket noi');
    }
    client.query(sql,(err,result)=>{
      if(err){
        cb(undefined);
      }
      cb(result);
    })
    done();
  });
}

module.exports = sqlQuery;
