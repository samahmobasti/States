import React, { Component } from "react";
import image from './pro.jpg';
import styled from 'styled-components'
import './App.css'

class App extends Component {
  state = {
    show: false, 
    person:{
      fullName: 'helai Afaf',
      bio:"Google developers Lead Women ...............", 
      profession:'software developer',
      img:image
    },
    count:0
  };

increment() {   
      this.setState({    
               count:this.state.count + 1       })     
                 }         

componentDidMount() {   
  
        this.interval = setInterval(() => this.increment(), 1000);   
          }
  Show = () => {
    this.setState({
      show: true
    });
  };

  Hide = () => {
    this.setState({
      show: false
    });
  };

  render() {
    if (this.state.show) {
      return (
        <div>
          <p>{this.state.count}</p>
          <h1>The component has mounted</h1>
          <button onClick={this.Hide}>Hide Profile</button>
          <div className="profile">
          <p>{this.state.person.fullName}</p>
            <p>{this.state.person.bio}</p>
          <img src= {this.state.person.img} alt="img" />

          </div>
        </div>
      );
    } else {
      return (
        <div>
           <p>{this.state.count}</p>
          <h1>The component has mounted</h1>
          <button onClick={this.Show}>Show Profile</button>
        </div>
      );
    }
  }
}

export default App;
