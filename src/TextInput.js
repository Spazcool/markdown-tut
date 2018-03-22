import React, { Component } from 'react';
import './App.css';

class TextInput extends Component {
  render() {
    return (
      <textarea name="input" cols="30" rows="5" placeholder="type here stupid..."></textarea>
    );
  }
}

export default TextInput;
