import React from "react";


class App extends React.Component{
  state={
    name: 'nada',
    bio:'Nada Mejdi',
    imageSrc:'',
    profession:'Dev'

  };
  handleName =(e) => {
    this.setState({
      name:e.target.value

    });
  }
    handleClick =(e) =>{
      this.setState(
        {bio:'Nada nada'}
      );
  };
  render(){
    return<div>
    <h1> <input value = {this.state.name} onChange={this.handleName} placeholder="name"/></h1>
   <h1> {this.state.bio}</h1>
   <h1> {this.state.imageSrc}</h1>
   <h1>{this.state.profession}</h1>
  
   <button onClick={this.handleClick}> ClickMe</button>

   </div>

  }
}

export default App;
