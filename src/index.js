import React, { Component } from 'react';
import {Router} from '@reach/router'
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className='bg'>
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));