var pg = require('pg');

var url =`postgres://cbhmpgtsnbxjnr:fef6f8fa68d09dd3d6e30e3cf95b73dca7eba79d0811a8cc3dabea54df934302@ec2-54-235-90-107.compute-1.amazonaws.com:5432/d2nhmc49ij1m0n`

function query(sql, cb){
  pg.connect(url,(err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(sql, (err, result) => {
      if(err) return cb(err);
      return cb(err, result);
    });
  });
}

//insert
//select
//update
//delete

function insertNote(sub, note, cb){
  var sql = `INSERT INTO "Notes"(subject, content) VALUES ('${sub}', '${note}') RETURNING *`;
  query(sql, cb);
}

function selectNote(cb){
  query('SELECT * FROM "Notes"', cb);
}

function removeNote(id, cb){
  var sql = `DELETE FROM "Notes" WHERE id=${id}`;
  query(sql, cb);
}


function updateNote(subject, content, id, cb){
  var sql = `UPDATE "Notes" SET subject='${subject}', content='${content}' WHERE id = ${id} RETURNING *`;
  query(sql, cb);
}

module.exports = {insertNote, selectNote, removeNote, updateNote};
