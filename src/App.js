import React, { Component } from 'react';
import logo from './aeroplane.svg';
import './App.css';

class App extends Component {

  getInitialState(){
    return { flightData : [] }
  }

  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    fetch('http://127.0.0.1:8081', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(results => {
      this.setState({ flightData : results});
    }, error => {
      console.log('failed: ', error);
    });
  }

  render() {
    const { flightData } = this.state;

    return (
      <div>
        <img className='App-logo' src={logo} alt="Tom Airlines Logo" />
        <p>{ flightData }</p>
      </div>
    );
  }
}

export default App;
