import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {formatCurrency, formatPrice} from './utils';

const formatChange = (value) => {
  return value > 0 ? `+${value}%` : `${value}%`;
}

const renderChange = (value) => {
  if (value < 0) {
    return <span style={{color: "#ff333a"}}>{formatChange(value)}</span>;
  } else {
    return <span style={{color: "#093"}}>{formatChange(value)}</span>;
  }
}

const renderIconImage = (ticker) => {
  const iconStyle = {
        width: "20px",
        height: "20px",
        marginLeft: "10px",
        fontSize: "20px",
  };
  return <i style={iconStyle} className={`cc ${ticker.symbol}`}></i>;
}

const renderHeader = () => {
  const style = {
    fontWeight: "bold",
    color: "#AAAAAA",
  };
  return (
    <TableRow>
      <TableHeaderColumn style={style}>Name</TableHeaderColumn>
      <TableHeaderColumn style={style}>Symbol</TableHeaderColumn>
      <TableHeaderColumn style={style}>Price</TableHeaderColumn>
      <TableHeaderColumn style={style}>Market Cap</TableHeaderColumn>
      <TableHeaderColumn style={style}>Volume (24Hr)</TableHeaderColumn>
      <TableHeaderColumn style={style}>% Change (24Hr)</TableHeaderColumn>
    </TableRow>
  );
}

const renderSingleAsset = (props) => {
  const { ticker } = props;
  const rowStyle = { textOverflow: "clip" };
  return (
    <TableRow key={ticker.symbol}>
      <TableRowColumn style={rowStyle}>
        {ticker.name} 
        {renderIconImage(ticker)}
      </TableRowColumn>
      <TableRowColumn style={rowStyle}>
        <span style={{fontSize: "10px", fontWeight: "100", marginLeft: "10px"}}>{ticker.symbol}</span>
      </TableRowColumn>
      <TableRowColumn style={rowStyle}>{ formatPrice(ticker.price_usd) }</TableRowColumn>
      <TableRowColumn style={rowStyle}>{ formatCurrency(ticker.market_cap_usd) }</TableRowColumn>
      <TableRowColumn style={rowStyle}>{ formatCurrency(ticker['24h_volume_usd']) }</TableRowColumn>
      <TableRowColumn style={rowStyle}>{ renderChange(ticker["percent_change_24h"]) }</TableRowColumn>
    </TableRow>
  );
}

export default class AssetsTable extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    showCheckboxes: false,
    height: '1000px',
  };

  render() {
    const { tickers } = this.props;

    return (
      <Table
        height={this.state.height}
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
      >
        <TableHeader
          className="cf-asset-table-header"
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
          {renderHeader()}
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
          {tickers.map(ticker => renderSingleAsset({ticker}))}
        </TableBody>
      </Table>
    );
  }
}
