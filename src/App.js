import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>

        <div className="container">
          <TextInput/>
          <TextOutput/>
        </div>

        <footer>
          Made by Me.
        </footer>

      </div>
    );
  }
}

export default App;
