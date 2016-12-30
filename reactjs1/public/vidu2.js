class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {num: this.props.start}
    this.add = this.add.bind(this);
  }
  add(){
    this.setState({num: this.state.num + this.props.step});
  }
  render(){
    return(
      <button onClick={this.add}>{this.state.num}</button>
    );
  }
}

ReactDOM.render(
  <Box start={9} step={2}/>,
  document.getElementById('root')
);
