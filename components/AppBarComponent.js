import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const classes = {
    menuButton: "appBarMenuIconButton",
    linkedInButton: "appBarLinkedInIconButton",
    loginButton: "appBarLoginIconButton",
    title: "appBarTypography"
};

class AppBarComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {anchor: false};
    }

    render() {
        return (
            <div className="appBar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <IconButton edge="linkedIn" className={classes.linkedInButton} color="inherit"
                                    aria-label="menu">
                            <LinkedIn/>
                        </IconButton>
                        {/*<Typography variant="h6" className={classes.title}>*/}
                        {/*    News*/}
                        {/*</Typography>*/}
                        <Button className={classes.loginButton} id="login" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <style global jsx>
                    {`
                      .appBarLoginIconButton {
                        position: absolute; 
                        right: 0;
                      }
                    `}
                </style>
            </div>
        );
    }
}

export default AppBarComponent;