import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { formatCurrency } from './utils';
import * as moment from 'moment'

export const renderAssetsHeader = (props) => {
    const { global } = props;
    if (global === undefined) {
        return null;
    }
    const leftInfo = (
        <div style={{display: "flex"}}>
            <span>Market Cap: {formatCurrency(global['total_market_cap_usd'])}</span>
            <span>Volume (24Hr): {formatCurrency(global['total_market_cap_usd'])}</span>
            <span>Bitcoin Dominance: {global['bitcoin_percentage_of_market_cap']}%</span>
        </div>
    );
    const rightInfo = (
        <span style={{color: "green"}}>Last Updated: {moment.unix(global['last_updated']).startOf('minute').fromNow()}</span>
    );
    const info = (
        <div className="cf-header-info">
            {leftInfo}
            {rightInfo}
        </div>
    )
    return (
        <AppBar 
            title={<span>Crypto Financial</span>}
            showMenuIconButton={false}
            style={{height: "40px", backgroundColor: "#000"}}
            titleStyle={{display: "flex", alignItems: "center", height: "40px", fontSize: "21px"}}
            iconStyleRight={{display: "flex", alignItems: "center"}}
            iconElementRight={info}
        />
    );
}
