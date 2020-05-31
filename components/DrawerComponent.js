import React, { Component } from 'react';
import {Drawer, Button} from '@material-ui/core';

class DrawerComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {anchor: false};
    }

    // function toggleDrawer(anchor, b) {
    //     this.setState.anchor = b;
    // }

    render() {
        return (
            <div className="container">
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={this.toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer anchor={anchor} open={this.state[anchor]} onClose={this.toggleDrawer(anchor, false)}>
                            {this.list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        );
    }

    toggleDrawer(anchor, b) {
        this.state.anchor = b
    }



}

export default DrawerComponent;