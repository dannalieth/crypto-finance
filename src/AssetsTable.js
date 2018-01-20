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

const renderSingleAsset = (props) => {
  const { ticker } = props;
  return (
    <TableRow key={ticker.symbol}>
      <TableRowColumn>{ticker.name} ({ticker.symbol})</TableRowColumn>
      <TableRowColumn>{ticker.price_usd}</TableRowColumn>
      <TableRowColumn>{ticker.market_cap_usd}</TableRowColumn>
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
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
        >
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Market Cap</TableHeaderColumn>
          </TableRow>
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
