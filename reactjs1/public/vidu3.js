class FormInput extends React.Component{
  show(){
    var text = this.refs.txt.value;
    alert(text);
  }
  render(){
    return (
      <div>
        <p style={{color: 'red', fontWeight: 'bold'}}>Pho</p>
        <input type="text" placeholder="your text here" ref="txt" defaultValue="Khoa Pham"/>
        <br/><br/>
        <button onClick={this.show.bind(this)}>Show</button>
      </div>
    )
  }
};

ReactDOM.render(
  <FormInput/>,
  document.getElementById('root')
);
