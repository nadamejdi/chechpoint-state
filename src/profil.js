import React, { Component } from 'react'
import myWonderfulImage from "./imagee.jpg"
class Profil extends Component {
    state={
    name: 'arya',
    bio:'dev',
    imageSrc:<img  className= "img" src={myWonderfulImage} alt ='imagee' /> ,
    profession:'devv',
    /*isVisible:false*/
    intervalID: null,
    timer:0


  };
  /*handleClick=()=>this.setState({name:'Arya',bio:'dev',imageSrc:<img  className= "img" src={myWonderfulImage} alt ='imagee' />})*/
  /*toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };*/

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
  <h2>{this.state.timer}</h2>
   
  
{/*<button onClick={() => setVisible}>Click</button>*/}

   </div>
    
}
componentDidMount = () => {
    console.log("run componentDidMount");
    this.setState({
      intervalID: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000)
    });
  };

  componentDidUpdate = () => {
    console.log("run componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("run componentWillUnmount");
    clearInterval(this.state.intervalID);
  };
}

export default Profil;
