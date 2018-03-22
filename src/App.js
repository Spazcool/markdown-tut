import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>

        <div className="container">
          <TextInput onChange={this.handleUserInput} value={this.state.userInput}/>
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
