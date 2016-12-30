class KhoaHoc extends React.Component{
  constructor(props){
    super(props);
    this.state = {soHocVien: 10};
    //this.add = this.add.bind(this);
  }
  add(){
    //alert(this.props.children)
    this.setState({soHocVien: this.state.soHocVien + 1})
  }
  render(){
    return (
      <div>
        <h1>{this.props.children}</h1>
        <p>Hoc vien: {this.state.soHocVien}</p>
        <button onClick={() => this.add()}>Them hoc vien</button>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <KhoaHoc>NodeJS</KhoaHoc>
    <KhoaHoc>ReactJS</KhoaHoc>
    <KhoaHoc>Android</KhoaHoc>
  </div>,
  document.getElementById('root')
);
