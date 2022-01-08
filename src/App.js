import React, { Component } from "react";
import Profil from "./profil";
import  "./App.css"

class App extends React.Component{
  state = {
    isVisible: false
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        
        <button  onClick={this.toggleVisibility}>
         toggle
        </button>
        
        {this.state.isVisible && <Profil/>}
      </div>
 )

 
}
}

 


export default App;
