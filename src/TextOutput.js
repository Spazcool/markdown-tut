import React, { Component } from 'react';
import './App.css';

class TextOutput extends Component {
  render() {
    return (
      <div>
        converted MD to go here: {this.props.input}
      </div>
    );
  }
}

export default TextOutput;
