import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch';

class App extends Component {
constructor(props){
super(props);
this.state = {
  members :[]
}
}
  componentDidMount(){
    fetch('http://localhost:4001/member')
    .then((response)=>response.json())
    .then(({data})=>{
      console.log(data); 
      this.setState({
        members:data
      })
    })
  }



  render() {

    return (
      <div className="App">

{
this.state.members.map((data , key)=>
<div>
<div>
{data.id} name:{data.name}  Lastname:{data.lname}   Age:{data.age}
</div>

</div>

) 
}

      </div>
    );
  }
}

export default App;
