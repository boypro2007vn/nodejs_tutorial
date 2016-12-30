class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {hinh: 1};
    this.change = this.change.bind(this);
  }
  change(i){
    this.setState({hinh: (this.state.hinh + i + 10) % 5 + 1 });
  }
  render(){
    return (
      <div style={{width:'150px'}}>
        <img src={`images/${this.state.hinh}.png`} width="150px"/>
        <hr/>
        <button onClick={()=>this.change(-2)}>Prev</button>
        <button style={{float: 'right'}} onClick={()=>this.change(0)}>Next</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
