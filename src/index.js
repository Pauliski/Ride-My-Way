import React, { Component } from 'react';
import {Router} from '@reach/router'
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Router>
        <Homepage path='/'/>
        <Homepage path='/home'/>
          <Login path='/user'/>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));