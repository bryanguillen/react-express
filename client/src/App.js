import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = { //the keys we are going to recieve based off of the api
      name: '',
      age: '',
      home: '',
      fact: ''
    }
  }

  componentDidMount() {
    axios
      .get('/say-hello')
      .then(response => {
        let userData = response.data;
        this.setState( prevState => ({
          name: prevState.name + userData.name,
          age: prevState.age + userData.age,
          home: prevState.home + userData.home, 
          fact: prevState.fact + userData.fact
        }))
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="user-data-container">
          <span>Hello, my name is {this.state.name}.</span> 
        </div>
        <div className="user-data-container">
          <span>I am {this.state.age} years old.</span> 
        </div>
        <div className="user-data-container">
          <span>I am from {this.state.home}.</span> 
        </div>
        <div className="user-data-container">
          <span>Interesting Fact: {this.state.fact}</span> 
        </div>
      </div>
    );
  }
}

export default App;
