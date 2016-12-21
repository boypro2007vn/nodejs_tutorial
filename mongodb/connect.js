var MongoClient = require('mongodb').MongoClient;

var url ='mongodb://localhost:27017/shopping';

//Connect
function conn(cb){
  MongoClient.connect(url,(err,db)=>{
    if(err){
      return console.log(err);
    }
    cb(db)
  })
}

//show All

// – collection.find( ).toArray      // lấy tất cả các kết quả trong collection
//
// – collection.find({‘state’: ‘MA’,’pop’:9610}).toArray      // thêm 1 điều kiện query nữa
//
// – collection.find({‘address.zipcode’: 10075}).toArray   // nếu có chứa các cặp field: value lồng trong cặp field:value
//
// -collection.find({ pop:{$gt:9600} }).toArray    //  điều kiện lớn hơn với filed pop
//
// -collection.find({ pop:{$lt:9600} }).toArray   // nhỏ hơn
//
// –  collection.find( {$or: [ { “sate”: “MA” }, { ‘pop’:{ $gt:40992} } ]}).toArray   // phép toán OR

function show(table,cb,condition){ //table:tên bảng, cb :callback , condition:điều kiện tìm
  conn(function(db){
    var collection = db.collection(table);
    if(condition==undefined){
      var condi = {};
    }else{
      var condi = condition;
    }
    collection.find(condi).toArray(function(err,result){
      if(err){
        console.log(err);
      }else{
        cb(result)
        db.close();
      }
    })
  })
}

//insert

function insert(object,table){
  conn(function(db){
    var collection = db.collection(table);
    collection.insert(object,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(`Inserted ${result.length} documents into the ${table} collection.
                      The documents inserted with "_id" are:
                      ${JSON.stringify(result)}`);
        db.close();
      }
    })
  })
}

//update

function update(object1,object2,table){ //object1 : giá trị gốc,  object2 : giá trị thay đổi
  conn(function(db){
      var collection = db.collection(table);
      collection.update(object1,{$set: object2},function(err,result){
        if(err){
          console.log(err);
        }else if(result){
          console.log(`Updated Successfully ${result} document(s).`);
        }else{
          console.log('No document found with defined "find" criteria!');
        }
        db.close();
      })
  })
}

//delete

function deleteRow(object,table){
  conn(function(db){
      var collection = db.collection(table);
      collection.deleteOne(object,function(err,result){
        if(err){
          console.log(err);
        }else {
          console.log('xoa thanh cong');
        }
        db.close();
      })
  })
}

show('books',function(result){
  console.log(result);
})
deleteRow({name:'cac'},'books')
//update({name:'nam'},{name:'thai'},'books')
//insert({name:'cac',ad:'hi'},'books')
