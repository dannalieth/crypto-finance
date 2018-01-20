import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import TableExampleSimple from './Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {TableExampleSimple()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
