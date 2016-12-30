import React, {Component} from 'react';
import Note from './Note.js'
import NoteForm from './NoteForm.js';

class List extends React.Component{
	
  constructor(props){
    super(props);
    this.state = {
      mang: []
    }
	socket = io()
  }
  render(){
    return (
      <div>
        <NoteForm/>
        {this.state.mang.map((e, i) => <Note key={i} index={i} info={e}/>)}
      </div>
    );
  }
  componentDidMount(){
    socket.on('SERVER_SEND_LIST', rows => {
      this.state.mang = rows;
      this.setState(this.state);
    });

    socket.on('SERVER_CONFIRM_ADD',rows=>{
      this.state.mang.push(rows)
      this.setState(this.state)
    })

    socket.on('SERVER_CONFIRM_UPDATE',rows=>{
      var {id,subject,content} = rows
      var index;
      this.state.mang.forEach((e,i)=>{
        if(e.id == id){
          index = i
        }
      })
      this.state.mang[index] = {id,subject,content}
      this.setState(this.state)
    })

    socket.on('SERVER_CONFIRM_DEL',id=>{
      this.state.mang= this.state.mang.filter((value)=>{
        return value.id != id;
      })
      this.setState(this.state)
    })
  }
}

module.exports = List;
