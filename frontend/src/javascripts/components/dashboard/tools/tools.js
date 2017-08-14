import React, { Component } from 'react';
import R from 'ramda';

import Header from './header/header';
import Tabs from './tabs/tabs';
import Menu from './menu/menu';
import Workflow from './workflow/workflow';

class Tools extends Component {
    constructor(props) {
        super(props);
    }

    // '5989fdcfe598fa16594f6276/5990a99c30136b6cc878adba' - id test base
    componentWillMount() {
        this.props.getBaseCurrent(this.props.baseId, this.props.currentTableId);
    }

    render() {
        return (
            <div onClick={() => {
                this.props.closeMenu();
            }}>
                <Header base={this.props.base}/>
                <Tabs base={this.props.base}
                    tables={this.props.tables}
                    addPopupIsOpen={this.props.addPopupIsOpen}
                    currentTableId={this.props.currentTableId}
                    openMenu={this.props.openMenu}
                    closeMenu={this.props.closeMenu}
                    switchTableClick={this.props.switchTableClick}
                    togglePopup={this.props.togglePopup}
                    addTableClick={this.props.addTableClick}/>
                <Menu/>
                <Workflow table={R.find((table) => table._id == this.props.currentTableId)(this.props.tables)}/>
            </div>
        );
    }
}

export default Tools;