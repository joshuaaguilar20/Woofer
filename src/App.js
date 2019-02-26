import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cardog from './components/Cardog';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        </header>
        <div>
          <Cardog />
        </div>
      </div>
    );
  }
}

export default App;
