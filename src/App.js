import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import { renderAssetsHeader } from './AssetsHeader';
import AssetsTable from './AssetsTable';
import './App.css';

class App extends Component {
  state = {
    tickers: [],
    global: undefined,
  }

  componentDidMount() {
    this._refresh();
    setInterval(this._refresh, 60 * 1000);  // Refresh every minute
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          { renderAssetsHeader({global: this.state.global}) }
          <AssetsTable tickers={this.state.tickers} />
        </div>
      </MuiThemeProvider>
    );
  }

  _refresh = () => {
    console.log("Refreshing...");
    fetch('https://api.coinmarketcap.com/v1/global/')
    .then((response) => response.json())
    .then((global) => {
      this.setState({ global });
    })
    return fetch('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => response.json())
    .then((tickers) => {
      this.setState({ tickers });
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export default App;
