import React from "react";
import myWonderfulImage from "./imagee.jpg"
import  "./App.css"

class App extends React.Component{
  state={
    name: 'nada',
    bio:'Nada Mejdi',
    imageSrc:<img  className= "img" src={myWonderfulImage} alt ='imagee' />,
    profession:'Dev'

  };
  componentDidMount(){
    console.log('classe component did mount');
  }
  componentDidUpdate(){
    console.log('classe component did update');

  }
  componentWillUnmount(){
    console.log('classe component did unmount');

  }
 /*handleName =(e) => {
    this.setState({
      name:e.target.value

    });
  }
    /*handleClick =(e) =>{
      this.setState(
        {bio:'Nada nada'}
      );
  };*/
 
  render(){
    return<div className="Back"> 
    
  {/*<h1> <input value = {this.state.name} onChange={this.handleName} placeholder="name"/></h1>*/}
   <h1> {this.state.bio}</h1>
   <h1> {this.state.imageSrc}</h1>
   <h1>{this.state.profession}</h1>
   <h1>{this.state.name}</h1>
   
  <button onClick={this.handleClick}> ClickMe</button>
{/*<button onClick={() => setVisible}>Click</button>*/}
   </div>

  }
}

export default App;
