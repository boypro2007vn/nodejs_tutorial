var express = require('express');
var parser = require('body-parser').urlencoded({extended: false});
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var {selectNote,insertNote,updateNote,removeNote} = require('./db.js');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
server.listen(process.env.PORT || 3000,() => console.log('Server started'));

app.get('/', require('./controler/indexRoute.js'));
app.post('/insert', parser, require('./controler/insert.js'));
app.post('/update', parser, require('./controler/update.js'));
app.post('/select', parser, require('./controler/select.js'));
app.post('/remove', parser, require('./controler/remove.js'));

io.on('connection', socket => {
  console.log('Co nguoi ket noi');
  selectNote((err, result) => {
    socket.emit('SERVER_SEND_LIST', result.rows)
  });
  socket.on('CLIENT_ADD_NOTE',data=>{
    var {sub,note} = data
    insertNote(sub,note,(err,result)=>{
      if(err){
        return console.log(err);
      }
      io.emit('SERVER_CONFIRM_ADD', result.rows[0])
    })
  })

  socket.on('CLIENT_UPDATE_NOTE',data=>{
    var {content,sub,id} = data;
    updateNote(sub,content,id,(err,result)=>{
      if(err){
        return console.log(err);
      }
      io.emit('SERVER_CONFIRM_UPDATE',result.rows[0])
    })
  })

  socket.on('CLIENT_DEL_NOTE',id=>{
    removeNote(id,(err,result)=>{
      if(err){
        return console.log(err);
      }
      io.emit('SERVER_CONFIRM_DEL',id)
    })
  })
});
