import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import AssetsTable from './AssetsTable';
import './App.css';

class App extends Component {
  state = {
    isLoading: false,
    tickers: [],
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    return fetch('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => response.json())
    .then((tickers) => {
      this.setState({ tickers, isLoading: false });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AssetsTable tickers={this.state.tickers} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
